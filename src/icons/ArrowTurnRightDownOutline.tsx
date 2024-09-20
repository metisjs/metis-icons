import * as React from 'react';
import type { SVGProps } from 'react';
const ArrowTurnRightDownOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.99 16.5 3.75 3.75m0 0 3.75-3.75m-3.75 3.75V3.75H4.49"
    />
  </svg>
);
export default ArrowTurnRightDownOutline;
