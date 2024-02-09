import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import { useState } from "react";
import api from "../helpers/url";
import storage from "../helpers/storageHelper";

interface Params {
  id: string;
  userEmail: string;
  userName: string;
  picturePath: string;
}

const useSocket = ({ id, userName, userEmail, picturePath }: Params) => {
  const [stomp, setStomp] = useState<any>(null);

  const connect = () => {
    const socket = new SockJS(`${api}/websocket?id_user_socket=${userEmail}`);
    let stompClient = Stomp.over(socket);
    stompClient.debug = () => {};
    stompClient.connect({}, function () {
      setStomp(stompClient);
      console.log("Connected");
      stompClient.subscribe("/user/topic/private-messages", (message: any) => {
        let data = JSON.parse(message.body);
        console.log(data);
      });
    });
  };

  const sendPrivateMessage = async (
    message: string,
    receiver: string | null
  ) => {
    if (stomp) {
      let messageToSend = {
        content: message,
        senderId: id,
        senderName: userName,
        picturePath,
        receiverEmail: receiver,
      };
      await fetch(`${api}/send-message`, {
        method: "POST",
        body: JSON.stringify(messageToSend),
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem(storage.token)}`,
          "Content-Type": "application/json",
        },
      });
    } else alert("Connection au serveur non établie ￣へ￣ ");
  };

  return { connect, sendPrivateMessage };
};

export default useSocket;
