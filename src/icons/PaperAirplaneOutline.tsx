import * as React from 'react';
import type { SVGProps } from 'react';
const PaperAirplaneOutline = (props: SVGProps<SVGSVGElement>) => (
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
    className={`meta-icon${props.className ? ` ${props.className}` : ''}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 12 3.269 3.125A59.8 59.8 0 0 1 21.485 12 59.8 59.8 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
    />
  </svg>
);
export default PaperAirplaneOutline;
