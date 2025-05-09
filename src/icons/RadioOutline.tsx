import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const RadioOutline = React.forwardRef(
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
        d="m3.75 7.5 16.5-4.125M12 6.75a48.3 48.3 0 0 0-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.3 48.3 0 0 0 12 6.75m-1.683 6.443-.005.005-.006-.005.006-.005zm-.005 2.127-.005-.006.005-.005.005.005zm-2.116-.006-.005.006-.006-.006.005-.005zm-.005-2.116-.006-.005.006-.005.005.005zM9.255 10.5v.008h-.008V10.5zm3.249 1.88-.007.004-.003-.007.006-.003zm-1.38 5.126-.003-.006.006-.004.004.007-.006.003Zm.007-6.501-.003.006-.007-.003.004-.007zm1.37 5.129-.007-.004.004-.006.006.003zm.504-1.877h-.008v-.007h.008zM9.255 18v.008h-.008V18zm-3.246-1.87-.007.004L6 16.127l.006-.003zm1.366-5.119-.004-.006.006-.004.004.007zM7.38 17.5l-.003.006-.007-.003.004-.007zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007Zm-.5 1.873h-.008v-.007h.008zM17.25 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
      />
    </svg>
  ),
);
export default RadioOutline;
