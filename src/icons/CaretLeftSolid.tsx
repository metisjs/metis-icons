import * as React from 'react';
import type { SVGProps } from 'react';
const CaretLeftSolid = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.148 3.87-8.925 7.696a.586.586 0 0 0 0 .868l8.925 7.697c.333.285.82.028.82-.434V4.303c0-.462-.487-.72-.82-.433"
    />
  </svg>
);
export default CaretLeftSolid;
