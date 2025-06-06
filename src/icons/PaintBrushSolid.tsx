import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const PaintBrushSolid = React.forwardRef(
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
        d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.8 18.8 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.8 18.8 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5m-8.3 14.025a19 19 0 0 0 1.896-1.207 8.03 8.03 0 0 0-4.513-4.513A19 19 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default PaintBrushSolid;
