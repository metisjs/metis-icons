import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const DivideOutline = React.forwardRef(
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
        d="M4.499 11.998h15m-7.5-6.75h.008v.008h-.008zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0M12 18.751h.007v.007H12zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
      />
    </svg>
  ),
);
export default DivideOutline;
