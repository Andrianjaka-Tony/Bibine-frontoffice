import { animate } from "framer-motion";
import { FunctionComponent, useEffect, useRef } from "react";
import PriceParser from "../../helpers/PriceHelper";

interface Props {
  from: number;
  to: number;
  isPrice: boolean;
}

const Counter: FunctionComponent<Props> = ({ from, to, isPrice }: Props) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = nodeRef.current as Element;

    const controls = animate(from, to, {
      duration: 3,
      ease: [0.12, 0.87, 0.06, 1.63],
      onUpdate(value) {
        node.textContent = isPrice
          ? PriceParser(value.toFixed(0))
          : value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to, isPrice]);

  return <p ref={nodeRef} />;
};

export default Counter;
