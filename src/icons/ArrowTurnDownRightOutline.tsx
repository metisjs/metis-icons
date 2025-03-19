import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const ArrowTurnDownRightOutline = React.forwardRef(
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
        d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
      />
    </svg>
  ),
);
export default ArrowTurnDownRightOutline;
