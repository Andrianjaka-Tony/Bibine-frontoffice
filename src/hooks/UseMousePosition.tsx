import { RefObject, useEffect, useState } from "react";

function useMousePosition(
  ref: RefObject<HTMLDivElement>,
  marginTop: number,
  marginLeft: number
) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mousemove", (event: MouseEvent) => {
        if (event.target) {
          const element = event.target as HTMLDivElement;
          const { left, top } = element.getBoundingClientRect();
          setMousePosition({
            x: event.clientX - left - element.clientLeft - marginLeft,
            y: event.clientY - top - element.clientTop - marginTop,
          });
        }
      });
    }
  }, [ref, marginLeft, marginTop]);

  return mousePosition;
}

export default useMousePosition;
