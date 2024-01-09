import { FunctionComponent } from "react";
import "./MessageBlock.scss";

export interface Contact {
  user: {
    photo: string;
    name: string;
    id: string;
  };
  lastMessage: string;
  sendedDate: string;
}

const MessageBlock: FunctionComponent<Contact> = ({
  user,
  lastMessage,
  sendedDate,
}) => {
  return (
    <div className="message-block">
      <img src={user.photo} alt={user.name} className="message-block-photo" />
      <div className="message-block-details">
        <p className="message-block-details-user">{user.name}</p>
        <p className="message-block-details-content">
          <p className="text">{lastMessage}</p>
          <p className="date">{sendedDate}</p>
        </p>
      </div>
    </div>
  );
};

export default MessageBlock;
