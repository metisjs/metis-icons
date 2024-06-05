import * as React from 'react';
import type { SVGProps } from 'react';
const ListBulletOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
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
    className={`meta-icon${props.className ? ` ${props.className}` : ''}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0M3.75 12h.007v.008H3.75zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0m-.375 5.25h.007v.008H3.75zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
    />
  </svg>
);
export default ListBulletOutline;
