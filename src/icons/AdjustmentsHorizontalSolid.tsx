import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const AdjustmentsHorizontalSolid = React.forwardRef(
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
      <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5M12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6m0 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18M3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5m1.5 12h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5M3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12m6-8.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" />
    </svg>
  ),
);
export default AdjustmentsHorizontalSolid;
