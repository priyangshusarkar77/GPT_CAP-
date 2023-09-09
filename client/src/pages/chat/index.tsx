import * as React from "react";
import ChatComponent from "@/components/talk-component";

const Chat: React.FC = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <ChatComponent />
    </div>
  );
};

export default Chat;
