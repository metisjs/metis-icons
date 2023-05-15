import * as React from 'react';
import { SVGProps } from 'react';
const ArrowSmallLeftOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    aria-hidden="true"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 12h-15m0 0 6.75 6.75M4.5 12l6.75-6.75"
    />
  </svg>
);
export default ArrowSmallLeftOutline;
