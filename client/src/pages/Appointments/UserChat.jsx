import React from "react";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import { Chat, MessageList, MessageInput } from "@pubnub/react-chat-components";

const pubnub = new PubNub({
  publishKey: "pub-c-036701fa-d959-4da7-8e19-cb7db3201bef",
  subscribeKey: "sub-c-860dc704-1eb5-4f82-8983-d13465df98f0",
  userId: "myFirstUser",
});
const currentChannel = "Default";
const theme = "light";

function UserChat() {
  return (
    <div className="h-[50vh] mt-5 rounded-lg">
        <PubNubProvider client={pubnub}>
            <Chat {...{ currentChannel, theme }}>
                <MessageList />
                <MessageInput />
            </Chat>
        </PubNubProvider>
    </div>
  );
}

export default UserChat;