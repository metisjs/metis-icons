import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const CurrencyDollarSolid = React.forwardRef(
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
      <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.3 2.3 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004s.152-.691.546-1.004m2.286 6.916v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991s-.152.671-.579.991a2.5 2.5 0 0 1-.921.42Z" />
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25M12.75 6a.75.75 0 0 0-1.5 0v.816a3.84 3.84 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.5 2.5 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.1 4.1 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191s-.434-1.632-1.179-2.191a4.1 4.1 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.84 3.84 0 0 0-1.719-.755z"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default CurrencyDollarSolid;
