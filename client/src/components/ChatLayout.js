import React, { useState, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import UsersPanel from './UsersPanel'
import MessagesList from './MessagesList'
import SendMessageForm from './SendMessageForm'

const ChatLayout = ({ socket }) => {
  const [messages, setMessages] = useState([])
  const [typingMessage, setTypingMessage] = useState('')
  const latestMessageRef = useRef(null)

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]))
  }, [socket, messages])

  useEffect(() => {
    socket.on('typingResponse', (data) => setTypingMessage(data))
  }, [socket])

  useEffect(() => {
    latestMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div>
      <Navbar />
      <div className="flex">
        <UsersPanel socket={socket} />
        <div className="flex-auto p:2 sm:p-6 justify-end flex flex-col h-screen bg-white dark:bg-slate-800">
          <div className="flex flex-col space-y-4 pt-12 p-3 overflow-y-auto scrolling-touch">
            <MessagesList
              messages={messages}
              typingMessage={typingMessage}
              latestMessageRef={latestMessageRef}
            />
            <SendMessageForm socket={socket} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatLayout
