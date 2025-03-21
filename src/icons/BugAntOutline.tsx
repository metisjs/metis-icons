import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const BugAntOutline = React.forwardRef(
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
        d="M12 12.75q1.724 0 3.383.237c1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24 24 0 0 1 12 12.75m0 0c2.883 0 5.647.508 8.207 1.44a24 24 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44a24 24 0 0 0 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25q1.494-.001 2.922-.236c.403-.066.74-.358.795-.762a3.78 3.78 0 0 0-.399-2.25M12 8.25q-1.493-.001-2.922-.236c-.402-.066-.74-.358-.795-.762a3.73 3.73 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6 6 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747M8.683 5a3.75 3.75 0 0 1 6.635 0m0 0c.427-.283.815-.62 1.155-.999a4.5 4.5 0 0 0-.575-1.752M4.921 6a24 24 0 0 0-.392 3.314 24 24 0 0 0 5.223 1.082M19.08 6q.308 1.622.392 3.314a24 24 0 0 1-5.223 1.082"
      />
    </svg>
  ),
);
export default BugAntOutline;
