import type { SVGProps } from 'react';
import React from 'react';
const StopCircleOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874a.563.563 0 0 1-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564z"
    />
  </svg>
);
export default StopCircleOutline;
