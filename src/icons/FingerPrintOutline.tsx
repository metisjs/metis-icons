import * as React from 'react';
import type { SVGProps } from 'react';
const FingerPrintOutline = (props: SVGProps<SVGSVGElement>) => (
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
    className={`metis-icon${props.className ? ` ${props.className}` : ''}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.47 7.47 0 0 0 4.5 10.5a7.46 7.46 0 0 1-1.15 3.993m1.989 3.559A11.2 11.2 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0q0 .79-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.7 18.7 0 0 1-2.485 5.33"
    />
  </svg>
);
export default FingerPrintOutline;
