import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const QueueListSolid = React.forwardRef(
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
      <path d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25zm-1.875 7.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75m.75 3a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z" />
    </svg>
  ),
);
export default QueueListSolid;
