const fs = require('fs').promises;
const camelcase = require('camelcase');
const { transform } = require('@svgr/core');
const { dirname, join } = require('path');
const { rimrafSync } = require('rimraf');

async function getIcons(style) {
  const iconDir = join(__dirname, '../node_modules/heroicons/24', style);
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

async function generateIcons(style) {
  let outDir = join(__dirname, '../src/icons');

  rimrafSync(outDir);

  let icons = await getIcons(style);

  await Promise.all(
    icons.flatMap(async ({ componentName, svg }) => {
      const content = await transform(
        svg,
        {
          expandProps: 'end',
          icon: true,
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
          template: ({ componentName, props, jsx, exports }, { tpl }) => tpl`
                import type { SVGProps } from 'react';
                import React from 'react';

                const ${componentName} = (${props}) => (${jsx});
                ${exports}
            `,
          typescript: true,
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                    cleanupIDs: { minify: false },
                  },
                  convertColors: { currentColor: true },
                },
              },
              'prefixIds',
              { name: 'convertColors', params: { currentColor: true } },
            ],
          },
        },
        { componentName },
      );

      return [ensureWrite(`${outDir}/${componentName}.tsx`, content)];
    }),
  );

  // await ensureWrite(`${outDir}/index.js`, exportAll(icons, format));

  console.log(`${style} icons generate success!`);
}

generateIcons('solid');
generateIcons('outline');
