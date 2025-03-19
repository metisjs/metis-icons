import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const ArrowTurnUpLeftOutline = React.forwardRef(
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
        d="M7.49 12 3.74 8.248m0 0 3.75-3.75m-3.75 3.75h16.5V19.5"
      />
    </svg>
  ),
);
export default ArrowTurnUpLeftOutline;
