import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const MoonSparklesOutline = React.forwardRef(
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.188 7.773a8.79 8.79 0 0 0 12.202 8.102A8.791 8.791 0 0 1 3.5 12.46 8.79 8.79 0 0 1 8.875 4.36a8.8 8.8 0 0 0-.687 3.414Z"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.05 3.68.169-1.18.168 1.18c.074.516.48.922.995.995l1.18.169-1.18.169c-.516.073-.92.478-.995.994l-.168 1.18-.169-1.18a1.17 1.17 0 0 0-.994-.994l-1.181-.17 1.18-.168c.516-.073.921-.479.995-.994M19.738 9.54l.168-1.18.169 1.18c.074.516.479.921.994.995l1.181.169-1.18.168c-.516.074-.921.48-.995.995l-.169 1.18-.168-1.18a1.17 1.17 0 0 0-.995-.995l-1.18-.168 1.18-.17c.516-.073.92-.478.995-.994"
      />
    </svg>
  ),
);
export default MoonSparklesOutline;
