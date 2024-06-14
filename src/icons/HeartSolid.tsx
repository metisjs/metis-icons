import * as React from 'react';
import type { SVGProps } from 'react';
const HeartSolid = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m11.645 20.91-.007-.003-.022-.012a15 15 0 0 1-.383-.218 25.2 25.2 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25 25 0 0 1-4.244 3.17 15 15 0 0 1-.383.219l-.022.012-.007.004-.003.001a.75.75 0 0 1-.704 0l-.003-.001Z" />
  </svg>
);
export default HeartSolid;
