import { FunctionComponent, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Go: FunctionComponent<Props> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60.05 60.17"
    >
      <g id="Calque_2" data-name="Calque 2">
        <g id="Calque_1-2" data-name="Calque 1">
          <path d="M0,29.79C0,23.22,0,16.65,0,10.08.12,4.47,4,.4,9.47.18c1.32,0,3.44-.79,3.65,1.31.19,1.88-.15,4.4-2.41,4.92C6.8,7.3,6.47,9.92,6.49,13.12c.06,11.28,0,22.56,0,33.84,0,5.47,1.09,6.63,6.42,6.65,11.39,0,22.77,0,34.16,0,3.08,0,5.51-.46,6.17-4.29.47-2.67,3.26-2.69,5.41-3,1.13-.14,1.14,1,1.26,1.9.83,5.95-3.23,11.6-9.16,11.71-13.85.25-27.72.22-41.57,0C3.84,59.93.13,55.71.05,50.24,0,43.42,0,36.61,0,29.79Z" />
          <path d="M48.26,7.24c-5.81,0-10.61,0-15.41,0-1.36,0-3.49.47-3.43-1.72s.28-5,3.17-5.15C39.87,0,47.2-.31,54.45.52c3.42.39,5.44,2.9,5.47,6.5.08,6.81,0,13.63,0,20.44,0,3.34-2.54,3.86-4.82,3.89-2.54,0-1.57-2.37-1.6-3.74-.13-4.93-.05-9.86-.05-14.87-1.76,0-2.33,1.32-3.14,2.13Q36.51,28.61,22.76,42.45c-1.69,1.7-2.94,2.71-5.12.45-2-2.1-1.54-3.39.29-5.19,9.07-9,18.06-18,27.07-27C45.86,9.81,46.68,8.9,48.26,7.24Z" />
        </g>
      </g>
    </svg>
  );
};

export default Go;
