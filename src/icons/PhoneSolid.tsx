import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const PhoneSolid = React.forwardRef(
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
        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.88 1.88 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.29 11.29 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.88 1.88 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75z"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default PhoneSolid;
