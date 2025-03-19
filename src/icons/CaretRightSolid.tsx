import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const CaretRightSolid = React.forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
      className={`metis-icon${props.className ? ` ${props.className}` : ''}`}
    >
      <path
        fill="currentColor"
        d="M16.777 11.566 7.852 3.87c-.333-.286-.82-.029-.82.433v15.394c0 .462.487.72.82.434l8.925-7.697a.587.587 0 0 0 0-.868"
      />
    </svg>
  ),
);
export default CaretRightSolid;
