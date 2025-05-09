import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const AtSymbolSolid = React.forwardRef(
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
        d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0s-3.808-9.98 0-13.788 9.98-3.808 13.788 0A9.72 9.72 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571s-1.28 1.179-2.191 1.179c-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579s.69-.178.991-.579c.3-.4.509-.99.509-1.671a8.22 8.22 0 0 0-2.416-5.834M15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default AtSymbolSolid;
