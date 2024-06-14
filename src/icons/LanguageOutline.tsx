import * as React from 'react';
import type { SVGProps } from 'react';
const LanguageOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.5 48.5 0 0 1 6-.371m0 0q1.681 0 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138A48 48 0 0 1 15 5.621m-4.589 8.495a18 18 0 0 1-3.827-5.802"
    />
  </svg>
);
export default LanguageOutline;
