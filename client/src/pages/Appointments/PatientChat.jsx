import React from 'react'
import { MessageBox, ChatList, MessageList, Input, Navbar } from "react-chat-elements";
import "react-chat-elements/dist/main.css"

const PatientChat = () => {
  return (
    <div className='relative bg-[#191b3c] my-5 rounded-lg pl-5 min-h-[55vh]'>
        <div className="pr-5 pt-5">
            <Navbar
                left={<div>doctorName</div>}
                right={<div>Contact</div>}
                type="light"
            />
        </div>
        <div className="absolute bottom-5 w-full pr-10">
            
            <MessageList
                className='message-list'
                lockable={true}
                toBottomHeight={'100%'}
                dataSource={[
                {
                position:"left",
                type:"text",
                title:"Kursat",
                text:"Give me a message list example !",
                },
                {
                position:"right",
                type:"text",
                title:"Emre",
                text:"That's all.",
                },
                ]}
            />
            <Input
                placeholder="Type here..."
                rightButtons={<button className='bg-black h-10 p-3 text-white rounded-lg my-auto' onClick={() => console.log("Sent")}>Send</button>}
                className='mt-5'
            />
            
        </div>
    </div>
  )
}

export default PatientChat