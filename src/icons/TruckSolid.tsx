import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const TruckSolid = React.forwardRef(
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
      <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75z" />
      <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7.5-12.75a.75.75 0 0 0-.75.75v11.25q0 .13.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.66 18.66 0 0 0-3.732-10.104 1.84 1.84 0 0 0-1.47-.725z" />
      <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
    </svg>
  ),
);
export default TruckSolid;
