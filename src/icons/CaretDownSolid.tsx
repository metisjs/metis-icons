import * as React from 'react';
import type { SVGProps } from 'react';
const CaretDownSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
    className={`metis-icon${props.className ? ` ${props.className}` : ''}`}
  >
    <path
      fill="currentColor"
      d="M19.697 7.031H4.303c-.462 0-.72.488-.433.82l7.696 8.926c.22.255.645.255.868 0l7.697-8.925c.285-.333.028-.82-.434-.82"
    />
  </svg>
);
export default CaretDownSolid;
