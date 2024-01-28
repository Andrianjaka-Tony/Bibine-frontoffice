import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import { websocketUrl } from "../helpers/WebsocketServer";
import { useState } from "react";

const useSocket = ({ id, userEmail }: { id: string; userEmail: string }) => {
  // const url = `${websocketUrl}/Contact/${id}`;
  const [stomp, setStomp] = useState<any>(null);

  const connect = () => {
    const socket = new SockJS(
      `${websocketUrl}/websocket?id_user_socket=${userEmail}`
    );
    let stompClient = Stomp.over(socket);
    stompClient.debug = () => {};
    stompClient.connect({}, function () {
      setStomp(stompClient);
      console.log(stomp);
      console.log("Connected");
      stompClient.subscribe("/user/topic/private-messages", (message: any) => {
        let data = JSON.parse(message.body);
        console.log(data);
      });
    });
  };

  // const fetchSendMessage = async (url: string, data: any) => {
  //   return fetch();
  // };

  // const sendPrivateMessage = (
  //   message: string,
  //   receiver: string | null,
  //   URL: string
  // ) => {
  //   if (stompClient) {
  //     let user = "Hello";
  //     let messageToSend = {
  //       content: message,
  //       sender: {
  //         id: id,
  //         username: "Dazai",
  //         picturePath: "hello",
  //       },
  //       receiver_id: receiver,
  //     };
  //     /////
  //     fetch();
  //     alaivoPost(
  //       `new_url${URL}send-message`,
  //       JSON.stringify(messageToSend),
  //       null,
  //       false
  //     );
  //   } else alert("Connection au serveur non établie ￣へ￣ ");
  // };

  return { connect };
};

export default useSocket;
