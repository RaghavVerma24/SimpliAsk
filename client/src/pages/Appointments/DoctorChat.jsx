import React from 'react'
import { MessageBox, ChatList  } from "react-chat-elements";
import "react-chat-elements/dist/main.css"

const DoctorChat = () => {
  return (
    <div className='w-[20vw] mt-5'>
      <ChatList
        className='chat-list'
        onClick={() => console.log("clicked")}
        dataSource={[
          {
            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
            alt: 'kursat_avatar',
            title: 'Kursat',
            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
            date: new Date(),
            unread: 3,
          },
          {
            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
            alt: 'kursat_avatar',
            title: 'Kursat',
            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
            date: new Date(),
            unread: 3,
          },
          {
            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
            alt: 'kursat_avatar',
            title: 'Kursat',
            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
            date: new Date(),
            unread: 3,
          }
      ]} />
    </div>
  )
}

export default DoctorChat