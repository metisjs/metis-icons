import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const CursorArrowRippleOutline = React.forwardRef(
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
        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
      />
    </svg>
  ),
);
export default CursorArrowRippleOutline;
