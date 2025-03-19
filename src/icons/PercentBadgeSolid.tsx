import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const PercentBadgeSolid = React.forwardRef(
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
        d="M11.99 2.243a4.5 4.5 0 0 0-3.398 1.55 4.5 4.5 0 0 0-3.497 1.306 4.5 4.5 0 0 0-1.307 3.498 4.5 4.5 0 0 0-1.548 3.397c0 1.357.6 2.573 1.548 3.397a4.5 4.5 0 0 0 1.307 3.498 4.5 4.5 0 0 0 3.498 1.307 4.5 4.5 0 0 0 3.397 1.549 4.5 4.5 0 0 0 3.397-1.549 4.5 4.5 0 0 0 3.497-1.307 4.5 4.5 0 0 0 1.306-3.497 4.5 4.5 0 0 0 1.55-3.398 4.5 4.5 0 0 0-1.549-3.397 4.5 4.5 0 0 0-1.307-3.498 4.5 4.5 0 0 0-3.498-1.307 4.5 4.5 0 0 0-3.396-1.549m3.53 7.28a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06zm-5.78-.905a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25m4.5 4.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default PercentBadgeSolid;
