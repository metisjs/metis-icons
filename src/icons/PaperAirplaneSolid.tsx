import * as React from 'react';
import type { SVGProps } from 'react';
const PaperAirplaneSolid = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.5 60.5 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.5 60.5 0 0 0 3.478 2.404" />
  </svg>
);
export default PaperAirplaneSolid;
