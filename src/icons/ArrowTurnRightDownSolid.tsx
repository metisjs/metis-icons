import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const ArrowTurnRightDownSolid = React.forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
      className={`metis-icon${props.className ? ` ${props.className}` : ''}`}
    >
      <path
        fillRule="evenodd"
        d="M3.738 3.75c0 .414.336.75.75.75H14.99v13.939l-2.47-2.47a.75.75 0 0 0-1.06 1.061l3.75 3.75a.75.75 0 0 0 1.06 0l3.751-3.75a.75.75 0 0 0-1.06-1.06l-2.47 2.469V3.75a.75.75 0 0 0-.75-.75H4.487a.75.75 0 0 0-.75.75Z"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default ArrowTurnRightDownSolid;
