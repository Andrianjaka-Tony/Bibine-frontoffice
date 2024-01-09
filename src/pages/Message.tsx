import { FunctionComponent, useEffect, useState } from "react";
import { Contact } from "../components/message/block/MessageBlock";
import contactsData from "../data/contact-data";
import "./Message.scss";
import MessageList from "../components/message/list/MessageList";

const Message: FunctionComponent = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  return (
    <section className="section message-section">
      <h1 className="title">Messages</h1>
      <MessageList contacts={contacts} />
    </section>
  );
};

export default Message;
