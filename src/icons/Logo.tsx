import { FunctionComponent, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Logo: FunctionComponent<Props> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 90.232 45.501"
    >
      <g id="logo_VAIKA" transform="translate(-39.268 -113.499)">
        <text
          id="aika"
          transform="translate(96.5 150)"
          font-size="30"
          font-family="Sora"
          font-weight="600"
          letter-spacing="0.015em"
        >
          <tspan x="-32.325" y="0">
            aika
          </tspan>
        </text>
        <path
          id="Tracé_24"
          data-name="Tracé 24"
          d="M5042.093,2639.253l17.325,19.011V2626.5"
          transform="translate(-5000 -2511)"
          fill="none"
          stroke="#000"
          stroke-linecap="square"
          stroke-width="4"
        />
      </g>
    </svg>
  );
};

export default Logo;
