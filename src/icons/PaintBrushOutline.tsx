import * as React from 'react';
import type { SVGProps } from 'react';
const PaintBrushOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
    data-slot="icon"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
    className={`metis-icon${props.className ? ` ${props.className}` : ''}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128m0 0a16 16 0 0 0 3.388-1.62m-5.043-.025a16 16 0 0 1 1.622-3.395m3.42 3.42a16 16 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a16 16 0 0 0-4.649 4.763m3.42 3.42a6.78 6.78 0 0 0-3.42-3.42"
    />
  </svg>
);
export default PaintBrushOutline;
