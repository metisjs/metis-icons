import * as React from 'react';
import type { SVGProps } from 'react';
const ArrowUturnDownOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15 15-6 6m0 0-6-6m6 6V9a6 6 0 0 1 12 0v3"
    />
  </svg>
);
export default ArrowUturnDownOutline;
