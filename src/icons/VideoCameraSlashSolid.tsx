import * as React from 'react';
import type { SVGProps } from 'react';
const VideoCameraSlashSolid = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M.97 3.97a.75.75 0 0 1 1.06 0l15 15a.75.75 0 1 1-1.06 1.06l-15-15a.75.75 0 0 1 0-1.06m16.28 12.09 2.69 2.69c.944.945 2.56.276 2.56-1.06V6.31c0-1.336-1.616-2.005-2.56-1.06l-2.69 2.69zm-1.5-8.56v8.068L4.682 4.5h8.068a3 3 0 0 1 3 3m-14.25 9V7.682l11.773 11.773a3 3 0 0 1-.523.045H4.5a3 3 0 0 1-3-3" />
  </svg>
);
export default VideoCameraSlashSolid;
