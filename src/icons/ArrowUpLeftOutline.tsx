import * as React from 'react';
import { SVGProps } from 'react';
const ArrowUpLeftOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"
    />
  </svg>
);
export default ArrowUpLeftOutline;
