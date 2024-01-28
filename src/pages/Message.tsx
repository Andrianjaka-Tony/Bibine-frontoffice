import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { websocketUrl } from "../helpers/WebsocketServer";
import useSocket from "../hooks/useSocket";

const Message = () => {
  const { id } = useParams();
  const userEmail = "jean@gmail.com";
  const { connect } = useSocket({ id: `${id}`, userEmail });
  // const url = `${websocketUrl}/Contact/${id}`;

  // const [data, setData] = useState(null);

  useEffect(() => {
    connect();
  }, [connect]);

  return <div>{id}</div>;
};

export default Message;
