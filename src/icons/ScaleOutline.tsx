import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const ScaleOutline = React.forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
      data-slot="icon"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
      className={`metis-icon${props.className ? ` ${props.className}` : ''}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.4 48.4 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0q1.515.215 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a6 6 0 0 1-2.031.352 6 6 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52q1.485-.305 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a6 6 0 0 1-2.031.352 6 6 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
      />
    </svg>
  ),
);
export default ScaleOutline;
