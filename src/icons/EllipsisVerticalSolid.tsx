import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const EllipsisVerticalSolid = React.forwardRef(
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
        d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default EllipsisVerticalSolid;
