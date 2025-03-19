import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const LoadingOutline = React.forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
      className={`metis-icon${props.className ? ` ${props.className}` : ''}`}
    >
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={3}
        opacity={0.25}
      />
      <path
        fill="currentColor"
        d="M5.99 18.01A8.5 8.5 0 0 1 12 3.5v-3a11.5 11.5 1 0 0-8.132 19.632z"
        opacity={0.75}
      />
    </svg>
  ),
);
export default LoadingOutline;
