import * as React from 'react';
import type { SVGProps } from 'react';
const ArrowDownRightOutline = (props: SVGProps<SVGSVGElement>) => (
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
    className={`meta-icon${props.className ? ` ${props.className}` : ''}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
    />
  </svg>
);
export default ArrowDownRightOutline;
