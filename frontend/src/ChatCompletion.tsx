import React, { useEffect, useState, useRef } from 'react';
import Talk from 'talkjs';

export const ChatComponent: React.FC = () => {
    const chatboxEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        Talk.ready.then(async () => {
            const me = new Talk.User({
                id: "myUserId",
                name: "Me",
                welcomeMessage: "Hey, that's me!"
            });
        
            const other = new Talk.User({
                id: "botUserId",
                name: "Bot",
                welcomeMessage: "Hey, I'm your bot!"
            });
            
            const session = new Talk.Session({
                appId: 't2louakF',
                me: me,
            });
      
            const conversationId = Talk.oneOnOneId(me, other);
            const conversation = session.getOrCreateConversation(conversationId);
            conversation.setParticipant(me);
            conversation.setParticipant(other);

            // Send a message as 'me'
            const initialMessage = "Hello I want to register!";
            conversation.sendMessage(initialMessage);

            // Fetch and display the bot's response
            const botResponse = await getBotResponse(initialMessage);
            conversation.sendMessage(botResponse);

            const chatbox = session.createChatbox();
            chatbox.select(conversation);
            
            if (chatboxEl.current) {
                chatbox.mount(chatboxEl.current);
            }
        });
    }, []);

    async function getBotResponse(message: string): Promise<string> {
        const payload = {
            messages: [
                {
                    text: message,
                    direction: "outgoing"
                }
            ]
        };
    
        const response = await fetch("https://c2cd-2402-3a80-43a9-494a-e04c-ce91-60e4-ec99.ngrok-free.app/robocaller", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
    
        const data = await response.json();
        return data.messages;
    }

    return (
        <div ref={chatboxEl} style={{ height: "500px" }}></div>
    );
}

export default ChatComponent;
