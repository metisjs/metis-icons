import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const CakeSolid = React.forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
    <svg
      ref={ref}
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
      <path d="m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0zm-3 0-.796.795a1.125 1.125 0 1 0 1.591 0zm-3 0-.796.795a1.125 1.125 0 1 0 1.591 0zm.75 5.763q.747-.032 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755q.753.01 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.2 62.2 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.1 4.1 0 0 1 2.585.364 2.6 2.6 0 0 0 2.33 0 4.1 4.1 0 0 1 3.67 0 2.6 2.6 0 0 0 2.33 0 4.1 4.1 0 0 1 3.67 0 2.6 2.6 0 0 0 2.33 0 4.1 4.1 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49 49 0 0 0 12 12.75m9.75 5.381a2.6 2.6 0 0 0-1.915.165 4.1 4.1 0 0 1-3.67 0 2.6 2.6 0 0 0-2.33 0 4.1 4.1 0 0 1-3.67 0 2.6 2.6 0 0 0-2.33 0 4.1 4.1 0 0 1-3.67 0 2.6 2.6 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875z" />
    </svg>
  ),
);
export default CakeSolid;
