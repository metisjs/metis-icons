import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const MoonSparklesSolid = React.forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
      className={`metis-icon${props.className ? ` ${props.className}` : ''}`}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.05 3.68.169-1.18.168 1.18c.074.516.48.922.995.995l1.18.169-1.18.169c-.516.073-.92.478-.995.994l-.168 1.18-.169-1.18a1.17 1.17 0 0 0-.994-.994l-1.181-.17 1.18-.168c.516-.073.921-.479.995-.994M19.738 9.54l.168-1.18.169 1.18c.074.516.479.921.994.995l1.181.169-1.18.168c-.516.074-.921.48-.995.995l-.169 1.18-.168-1.18a1.17 1.17 0 0 0-.995-.995l-1.18-.168 1.18-.17c.516-.073.92-.478.995-.994"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.469 4.195a.67.67 0 0 1 .144.728 8 8 0 0 0 10.464 10.464.667.667 0 0 1 .872.871A9.335 9.335 0 0 1 12.333 22 9.33 9.33 0 0 1 3 12.667c0-3.882 2.37-7.21 5.742-8.616a.67.67 0 0 1 .727.144"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default MoonSparklesSolid;
