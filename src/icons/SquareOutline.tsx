import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const SquareOutline = React.forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
      className={`metis-icon${props.className ? ` ${props.className}` : ''}`}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.09 5H6.91A1.91 1.91 0 0 0 5 6.91v10.18A1.91 1.91 0 0 0 6.91 19h10.18A1.91 1.91 0 0 0 19 17.09V6.91A1.91 1.91 0 0 0 17.09 5"
      />
    </svg>
  ),
);
export default SquareOutline;
