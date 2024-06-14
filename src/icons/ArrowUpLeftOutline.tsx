import * as React from 'react';
import type { SVGProps } from 'react';
const ArrowUpLeftOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"
    />
  </svg>
);
export default ArrowUpLeftOutline;
