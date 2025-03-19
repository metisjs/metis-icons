import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const ArrowDownLeftOutline = React.forwardRef(
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
        d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
      />
    </svg>
  ),
);
export default ArrowDownLeftOutline;
