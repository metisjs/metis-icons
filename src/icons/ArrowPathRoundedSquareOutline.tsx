import * as React from 'react';
import type { SVGProps } from 'react';
const ArrowPathRoundedSquareOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.5 12q0-1.848-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 49 49 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7q-.025.33-.046.662M19.5 12l3-3m-3 3-3-3m-12 3q0 1.848.138 3.662a4.006 4.006 0 0 0 3.7 3.7 49 49 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7q.025-.33.046-.662M4.5 12l3 3m-3-3-3 3"
    />
  </svg>
);
export default ArrowPathRoundedSquareOutline;
