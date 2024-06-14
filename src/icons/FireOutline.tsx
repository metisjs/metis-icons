import * as React from 'react';
import type { SVGProps } from 'react';
const FireOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.3 8.3 0 0 0 9 9.601a8.98 8.98 0 0 1 3.361-6.867 8.2 8.2 0 0 0 3 2.48Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18a3.75 3.75 0 0 0 .495-7.468 6 6 0 0 0-1.925 3.547 6 6 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18"
    />
  </svg>
);
export default FireOutline;
