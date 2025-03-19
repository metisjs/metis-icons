import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const EllipsisHorizontalOutline = React.forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
    <svg
      ref={ref}
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
        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
      />
    </svg>
  ),
);
export default EllipsisHorizontalOutline;
