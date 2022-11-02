import React, { useState } from 'react'

const SendMessageForm = ({ socket }) => {
  const [message, setMessage] = useState('')
  const [timer, setTimer] = useState(null)

  const sendMessage = () => {
    if (message.trim()) {
      const date = new Date()

      socket.emit('message', {
        id: Math.random(),
        socketID: socket.id,
        nickname: localStorage.getItem('nickname'),
        text: message,
        time: date.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      })
    }

    socket.emit('typing', '')
    setMessage('')
  }

  const emitTyping = (e) => {
    // Enter pressed
    if (e.keyCode === 13) {
      sendMessage()
      return
    }

    const nickname = localStorage.getItem('nickname')
    socket.emit('typing', `${nickname} is typing...`)
  }

  const inputChanged = (e) => {
    setMessage(e.target.value)

    clearTimeout(timer)

    const newTimer = setTimeout(() => {
      socket.emit('typing', '')
    }, 500)

    setTimer(newTimer)
  }

  return (
    <div className="border-t-2 border-gray-200 dark:border-slate-600 px-4 pt-4 mb-2 sm:mb-0">
      <div className="relative flex">
        <input
          type="text"
          placeholder="Enter Message"
          className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-3 bg-gray-200 dark:bg-slate-700 dark:text-gray-200 rounded-md py-3"
          value={message}
          onKeyDown={emitTyping}
          onChange={inputChanged}
        />
        <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
          <button
            type="button"
            onClick={sendMessage}
            className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-violet-500 hover:bg-violet-400 focus:outline-none"
          >
            <span className="font-light">Send</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 ml-2 transform rotate-90"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SendMessageForm
