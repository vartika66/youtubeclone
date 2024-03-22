import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //APi Polloing
      console.log("API polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);
    return () => clearTimeout(i);
  }, []);

  return (
    <>
      <div className="mx-2 border border-gray-700 w-[300px] h-[600px] overflow-y-scroll flex-col-reverse">
        <div>
          {chatMessages &&
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submitted ", liveMessage);
          dispatch(
            addMessage({
              name: "vartika tiwari",
              message: liveMessage,
            })
          );
          setLiveMessage();
        }}
      >
        <input
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="border w-full p-2 ml-2 border-black"
        />
        <button className="px-2 mx-2 bg-green-300">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
