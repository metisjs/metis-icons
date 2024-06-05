import * as React from 'react';
import type { SVGProps } from 'react';
const MoonSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    aria-hidden="true"
    data-slot="icon"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
    className={`meta-icon${props.className ? ` ${props.className}` : ''}`}
  >
    <path
      fillRule="evenodd"
      d="M9.528 1.718a.75.75 0 0 1 .162.819A9 9 0 0 0 9 6a9 9 0 0 0 9 9 9 9 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.5 10.5 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162"
      clipRule="evenodd"
    />
  </svg>
);
export default MoonSolid;
