import React, { useEffect, useState, useRef } from "react";
import Talk from "talkjs";

export const ChatComponent: React.FC = () => {
  const chatboxEl = useRef<HTMLDivElement>(null);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    Talk.ready.then(async () => {
      const me = new Talk.User({
        id: "123",
        name: "Me",
      });

      const other = new Talk.User({
        id: "12322",
        name: "Rakuten",
        welcomeMessage: "Hey, welcome to Rakuten, how may I help you?",
      });

      const session = new Talk.Session({
        appId: "t2louakF",
        me: me,
      });

      const conversationId = Talk.oneOnOneId(me, other);
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(me);
      conversation.setParticipant(other);

      const chatbox = session.createChatbox();
      chatbox.select(conversation);

      if (chatboxEl.current) {
        chatbox.mount(chatboxEl.current);
      }

      const load = async () => {
        console.log(session.getChatboxes()[0].currentConversation?.id);
      };
      document.addEventListener("click", load);
    });
  }, []);

  async function getOpenAIResponse(message: string): Promise<string> {
    const payload = {
      messages: [
        {
          text: message,
          direction: "outgoing",
        },
      ],
    };

    const response = await fetch(
      "https://c2cd-2402-3a80-43a9-494a-e04c-ce91-60e4-ec99.ngrok-free.app/robocaller",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    const data = await response.json();
    return data["messages"];
  }

  return (
    <div ref={chatboxEl} style={{ height: "700px", width: "500px" }}></div>
  );
};

export default ChatComponent;
