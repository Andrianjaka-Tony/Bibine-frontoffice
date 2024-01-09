import { FunctionComponent } from "react";
import "./MessageBox.scss";

interface Props {
  user: {
    photo: string;
    name: string;
    id: string;
  };
  messages: string[];
}

const MessageBox: FunctionComponent<Props> = () => {
  return <div className="message-box">Hello message Box</div>;
};

export default MessageBox;
