import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const DoubleSquareOutline = React.forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 48 48"
      {...props}
      className={`metis-icon${props.className ? ` ${props.className}` : ''}`}
    >
      <path
        fill="currentColor"
        d="M27.604 20.396V30.79H17.21V20.396zm.01-1.2H17.19a1.19 1.19 0 0 0-1.19 1.19V30.81c0 .652.528 1.19 1.19 1.19h10.424a1.19 1.19 0 0 0 1.19-1.19V20.386c0-.662-.528-1.19-1.19-1.19M30.829 16H20.386c-.652 0-1.17.528-1.18 1.171v1.219h1.2V17.2H30.8v10.395h-1.2v1.2h1.22c.652 0 1.17-.529 1.18-1.181V17.17c0-.643-.528-1.171-1.171-1.171"
      />
    </svg>
  ),
);
export default DoubleSquareOutline;
