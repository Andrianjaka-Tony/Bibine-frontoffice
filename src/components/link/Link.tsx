import { FunctionComponent, MouseEventHandler } from "react";
import "./Link.scss";

interface Props {
  text: string;
  onClick: MouseEventHandler<HTMLElement>;
}

const Link: FunctionComponent<Props> = ({
  text = "",
  onClick = () => {},
}: Props) => {
  return (
    <div onClick={onClick} className="link">
      {text}
    </div>
  );
};

export default Link;
