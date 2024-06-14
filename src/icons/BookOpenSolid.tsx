import * as React from 'react';
import type { SVGProps } from 'react';
const BookOpenSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    aria-hidden="true"
    data-slot="icon"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
    className={`metis-icon${props.className ? ` ${props.className}` : ''}`}
  >
    <path d="M11.25 4.533A9.7 9.7 0 0 0 6 3a9.7 9.7 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.2 8.2 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886zm1.5 16.103A8.2 8.2 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.7 9.7 0 0 0 18 3a9.7 9.7 0 0 0-5.25 1.533z" />
  </svg>
);
export default BookOpenSolid;
