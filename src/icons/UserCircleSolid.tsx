import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const UserCircleSolid = React.forwardRef(
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
        d="M18.685 19.097A9.72 9.72 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.72 9.72 0 0 0 3.065 7.097A9.72 9.72 0 0 0 12 21.75a9.72 9.72 0 0 0 6.685-2.653m-12.54-1.285A7.49 7.49 0 0 1 12 15a7.49 7.49 0 0 1 5.855 2.812A8.22 8.22 0 0 1 12 20.25a8.22 8.22 0 0 1-5.855-2.438M15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default UserCircleSolid;
