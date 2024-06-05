import * as React from 'react';
import type { SVGProps } from 'react';
const EllipsisVerticalOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
    />
  </svg>
);
export default EllipsisVerticalOutline;
