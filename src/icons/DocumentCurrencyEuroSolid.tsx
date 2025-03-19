import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const DocumentCurrencyEuroSolid = React.forwardRef(
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
        d="M3.75 3.375c0-1.036.84-1.875 1.875-1.875H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875zm7.464 9.442c.459-.573 1.019-.817 1.536-.817s1.077.244 1.536.817a.75.75 0 1 0 1.171-.937c-.713-.892-1.689-1.38-2.707-1.38s-1.994.488-2.707 1.38a4.6 4.6 0 0 0-.705 1.245H8.25a.75.75 0 0 0 0 1.5h.763q-.025.375 0 .75H8.25a.75.75 0 0 0 0 1.5h1.088c.17.449.406.87.705 1.245.713.892 1.689 1.38 2.707 1.38s1.994-.488 2.707-1.38a.75.75 0 0 0-1.171-.937c-.459.573-1.019.817-1.536.817s-1.077-.244-1.536-.817q-.117-.146-.215-.308h1.751a.75.75 0 0 0 0-1.5h-2.232a4 4 0 0 1 0-.75h2.232a.75.75 0 0 0 0-1.5H11q.097-.16.214-.308"
        clipRule="evenodd"
      />
      <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.77 9.77 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375z" />
    </svg>
  ),
);
export default DocumentCurrencyEuroSolid;
