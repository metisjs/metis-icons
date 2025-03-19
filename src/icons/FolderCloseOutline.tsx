import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const FolderCloseOutline = React.forwardRef(
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
        d="m10.94 4.19 2.12 2.12c.281.281.663.44 1.061.44H19.5A2.25 2.25 0 0 1 21.75 9v9a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 18V6A2.25 2.25 0 0 1 4.5 3.75h5.379a1.5 1.5 0 0 1 1.061.44"
      />
    </svg>
  ),
);
export default FolderCloseOutline;
