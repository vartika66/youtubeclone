import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm ">
      <img
        alt="usericon"
        src="https://icon-library.com/images/generic-user-icon/generic-user-icon-13.jpg"
        className="h-8 m-2"
      />
      <span className="font-bold px-2">{name}</span>
      <span className="ml-3">{message}</span>
    </div>
  );
};

export default ChatMessage;
