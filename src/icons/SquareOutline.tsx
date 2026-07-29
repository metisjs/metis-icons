import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const SquareOutline = React.forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 48 48"
      width="1em"
      height="1em"
      {...props}
      className={`metis-icon${props.className ? ` ${props.className}` : ''}`}
    >
      <path
        fill="currentColor"
        d="M30.737 17.263v13.474H17.253V17.263zm.08-1.263H17.173c-.647 0-1.173.526-1.173 1.172v13.656c0 .646.526 1.172 1.172 1.172h13.656c.646 0 1.172-.526 1.172-1.172V17.183c0-.657-.526-1.183-1.183-1.183"
      />
    </svg>
  ),
);
export default SquareOutline;
