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
        d="M14.364 8H5.636A1.636 1.636 0 0 0 4 9.636v8.728A1.636 1.636 0 0 0 5.636 20h8.728A1.636 1.636 0 0 0 16 18.364V9.636A1.636 1.636 0 0 0 14.364 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.636 16h-.272A1.636 1.636 0 0 0 20 14.364V5.636A1.636 1.636 0 0 0 18.364 4H9.636A1.636 1.636 0 0 0 8 5.636v-.272"
      />
    </svg>
  ),
);
export default DoubleSquareOutline;
