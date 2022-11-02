import React from 'react'
import Message from './Message'

const MessagesList = ({ messages, typingMessage, latestMessageRef }) => {
  return (
    <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrolling-touch">
      {messages.map((message) => {
        const nickname = localStorage.getItem('nickname')

        if (message.nickname === nickname) {
          return <Message key={message.id} message={message} />
        }

        return (
          <Message
            key={message.id}
            nickname={message.nickname}
            message={message}
            incoming
          />
        )
      })}
      <span className="text-gray-400">{typingMessage}</span>
      <div ref={latestMessageRef} />
    </div>
  )
}

export default MessagesList
