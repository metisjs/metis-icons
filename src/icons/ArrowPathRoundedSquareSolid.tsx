import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const ArrowPathRoundedSquareSolid = React.forwardRef(
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
        d="M12 5.25q1.82 0 3.605.135a3.256 3.256 0 0 1 3.01 3.01q.066.875.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751q-.035-.975-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.4 49.4 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282a37 37 0 0 0-.046.672.75.75 0 1 0 1.497.092q.02-.325.044-.651a3.256 3.256 0 0 1 3.01-3.01Q10.18 5.25 12 5.25m-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751q.035.975.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.4 49.4 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392q.025-.334.046-.672a.75.75 0 0 0-1.497-.092q-.02.325-.044.651a3.256 3.256 0 0 1-3.01 3.01 48 48 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 48 48 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06z"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default ArrowPathRoundedSquareSolid;
