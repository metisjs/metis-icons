import * as React from 'react';
import type { SVGProps } from 'react';
const CaretUpSolid = (props: SVGProps<SVGSVGElement>) => (
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
      d="m20.13 16.148-7.696-8.925a.586.586 0 0 0-.868 0L3.87 16.148c-.286.333-.029.82.433.82h15.394c.462 0 .72-.487.434-.82"
    />
  </svg>
);
export default CaretUpSolid;
