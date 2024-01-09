import { FunctionComponent } from "react";
import MessageBlock, { Contact } from "../block/MessageBlock";
import "./MessageList.scss";

interface Props {
  contacts: Contact[];
}

const MessageList: FunctionComponent<Props> = ({ contacts }) => {
  return (
    <div className="message-list">
      {contacts.map((contact) => (
        <MessageBlock {...contact} key={contact.user.id} />
      ))}
    </div>
  );
};

export default MessageList;
