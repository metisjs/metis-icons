import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const DoubleSquareOutline = React.forwardRef(
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
        d="M14.068 8.5H6.432A1.43 1.43 0 0 0 5 9.932v7.636A1.43 1.43 0 0 0 6.432 19h7.636a1.43 1.43 0 0 0 1.432-1.432V9.932A1.43 1.43 0 0 0 14.068 8.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.807 15.5h-.239A1.43 1.43 0 0 0 19 14.068V6.432A1.43 1.43 0 0 0 17.568 5H9.932A1.43 1.43 0 0 0 8.5 6.432v-.239"
      />
    </svg>
  ),
);
export default DoubleSquareOutline;
