import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const CurrencyRupeeSolid = React.forwardRef(
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
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25M9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.25 2.25 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06l-1.73-1.732A3.75 3.75 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.7 3.7 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default CurrencyRupeeSolid;
