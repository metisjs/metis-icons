import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const BuildingStorefrontSolid = React.forwardRef(
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
      <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75a3.74 3.74 0 0 0 2.25.75c.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75a3.74 3.74 0 0 0 2.25-.75 3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.88 1.88 0 0 0-1.325-.549z" />
      <path
        fillRule="evenodd"
        d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.2 5.2 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.2 5.2 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506a5.26 5.26 0 0 0 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default BuildingStorefrontSolid;
