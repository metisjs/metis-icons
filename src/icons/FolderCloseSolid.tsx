import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const FolderCloseSolid = React.forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
      className={`metis-icon${props.className ? ` ${props.className}` : ''}`}
    >
      <path d="M21.621 20.121A3 3 0 0 1 19.5 21h-15a3 3 0 0 1-3-3V6.5c0-.796.316-2.059.879-2.621A3 3 0 0 1 4.5 3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v9a3 3 0 0 1-.879 2.121" />
    </svg>
  ),
);
export default FolderCloseSolid;
