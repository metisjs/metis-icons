import * as React from 'react';
import type { SVGProps, ForwardedRef } from 'react';
const SidebarOutline = React.forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: ForwardedRef<SVGSVGElement>) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
      className={`metis-icon${props.className ? ` ${props.className}` : ''}`}
    >
      <path
        fill="currentColor"
        d="M8.202 4.8c-.542.005-.985.015-1.364.046-.463.037-.791.101-1.051.194l-.24.103a3.2 3.2 0 0 0-1.277 1.18l-.123.22c-.15.296-.247.673-.297 1.29-.052.628-.052 1.43-.052 2.563v3.196c0 1.133 0 1.935.052 2.562.05.618.146.995.297 1.292l.123.22c.308.502.75.91 1.276 1.179l.24.103c.26.093.589.157 1.052.194.379.032.822.041 1.363.046zm13.596 8.793c0 1.106 0 1.984-.057 2.691-.052.627-.151 1.173-.366 1.674l-.1.212a4.8 4.8 0 0 1-1.767 1.912l-.33.185c-.56.285-1.17.407-1.886.466-.707.058-1.585.057-2.692.057H9.4c-1.107 0-1.985 0-2.692-.057-.627-.052-1.172-.152-1.674-.367l-.212-.099A4.8 4.8 0 0 1 2.91 18.5l-.185-.33c-.285-.559-.407-1.17-.466-1.886-.057-.707-.057-1.585-.057-2.691v-3.197c0-1.107 0-1.985.057-2.692.059-.716.181-1.327.466-1.886l.185-.33A4.8 4.8 0 0 1 4.822 3.72l.212-.1c.501-.215 1.047-.314 1.674-.366.707-.057 1.585-.057 2.692-.057h5.2c1.107 0 1.985 0 2.692.057.716.059 1.327.181 1.886.466l.33.185a4.8 4.8 0 0 1 1.767 1.912l.1.212c.215.501.314 1.047.366 1.674.057.707.057 1.585.057 2.692zM9.797 19.194H14.6c1.133 0 1.935 0 2.562-.052.618-.05.995-.146 1.291-.297l.22-.123c.503-.308.911-.75 1.18-1.276l.103-.24c.093-.26.157-.589.194-1.052.052-.627.052-1.429.052-2.562v-3.196c0-1.133 0-1.935-.052-2.562-.037-.463-.101-.791-.194-1.051l-.103-.24a3.2 3.2 0 0 0-1.18-1.277l-.22-.123c-.296-.15-.673-.247-1.29-.297-.628-.052-1.43-.052-2.563-.052H9.797l.001.006z"
      />
    </svg>
  ),
);
export default SidebarOutline;
