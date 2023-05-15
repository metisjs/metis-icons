const fs = require('fs').promises;
const camelcase = require('camelcase');
const { transform } = require('@svgr/core');
const { dirname, join } = require('path');
const { rimrafSync } = require('rimraf');

async function getIcons(iconPath, style) {
  const iconDir = join(__dirname, iconPath, style);
  let files = await fs.readdir(iconDir);
  return Promise.all(
    files.map(async (file) => ({
      svg: await fs.readFile(join(iconDir, file), 'utf8'),
      componentName: `${camelcase(file.replace(/\.svg$/, ''), {
        pascalCase: true,
      })}${camelcase(style, { pascalCase: true })}`,
    })),
  );
}

async function ensureWrite(file, text) {
  await fs.mkdir(dirname(file), { recursive: true });
  await fs.writeFile(file, text, 'utf8');
}

async function generateIcons(iconPath, style) {
  let outDir = join(__dirname, '../src/icons');

  let icons = await getIcons(iconPath, style);

  await Promise.all(
    icons.flatMap(async ({ componentName, svg }) => {
      const content = await transform(
        svg,
        {
          expandProps: 'end',
          icon: true,
          typescript: true,
          prettier: true,
          jsxRuntime: 'classic',
          plugins: [
            '@svgr/plugin-svgo',
            '@svgr/plugin-jsx',
            // '@svgr/plugin-prettier',
          ],
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                    cleanupIds: { minify: false },
                  },
                },
              },
              'prefixIds',
              { name: 'convertColors', params: { currentColor: true } },
            ],
          },
        },
        { componentName },
      );

      await ensureWrite(`${outDir}/${componentName}.tsx`, content);
    }),
  );

  console.log(`${style} icons generate success!`);

  return icons.map(({ componentName }) => componentName);
}

function exportAll(icons) {
  return icons
    .map(
      (componentName) =>
        `export { default as ${componentName} } from './icons/${componentName}';`,
    )
    .join('\n');
}

async function main() {
  rimrafSync(join(__dirname, '../src/icons'));

  const icons = [
    ...(await generateIcons('../node_modules/heroicons/24', 'solid')),
    ...(await generateIcons('../node_modules/heroicons/24', 'outline')),
    ...(await generateIcons('../src/svg', 'outline')),
  ];

  await ensureWrite(join(__dirname, '../src/index.ts'), exportAll(icons));
}

main();
