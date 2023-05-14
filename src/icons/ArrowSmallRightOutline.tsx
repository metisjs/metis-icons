import type { SVGProps } from 'react';
import React from 'react';
const ArrowSmallRightOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75"
    />
  </svg>
);
export default ArrowSmallRightOutline;
