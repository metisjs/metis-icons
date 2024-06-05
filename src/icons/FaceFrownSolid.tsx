import * as React from 'react';
import type { SVGProps } from 'react';
const FaceFrownSolid = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866s-.059-.605-.189-.866c-.108-.215-.395-.634-.936-.634m4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866s-.059.605-.189.866c-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866m-4.34 7.964a.75.75 0 0 1-1.061-1.06 5.24 5.24 0 0 1 3.73-1.538 5.24 5.24 0 0 1 3.695 1.538.75.75 0 1 1-1.061 1.06 3.74 3.74 0 0 0-2.639-1.098 3.74 3.74 0 0 0-2.664 1.098"
      clipRule="evenodd"
    />
  </svg>
);
export default FaceFrownSolid;
