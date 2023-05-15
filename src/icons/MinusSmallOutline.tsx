import * as React from 'react';
import { SVGProps } from 'react';
const MinusSmallOutline = (props: SVGProps<SVGSVGElement>) => (
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
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
  </svg>
);
export default MinusSmallOutline;
