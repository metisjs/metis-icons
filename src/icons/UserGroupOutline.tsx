import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const UserGroupOutline = React.forwardRef(
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
        d="M18 18.72a9.1 9.1 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031q0 .338-.037.666A11.94 11.94 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6 6 0 0 1 6 18.719m12 0a5.97 5.97 0 0 0-.941-3.197m0 0A6 6 0 0 0 12 12.75a6 6 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 9 9 0 0 0 3.74.477m.94-3.197a5.97 5.97 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0m6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0"
      />
    </svg>
  ),
);
export default UserGroupOutline;
