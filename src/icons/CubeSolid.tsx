import * as React from 'react';
import type { SVGProps } from 'react';
const CubeSolid = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648zm-10.5 14.25v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
  </svg>
);
export default CubeSolid;
