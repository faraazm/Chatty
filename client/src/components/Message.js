import React from 'react'

const Message = ({ nickname, message, incoming }) => {
  return (
    <>
      {incoming ? (
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-md max-w-xs mx-2 order-2 items-start">
              <div>
                <div className="flex">
                  <span className="text-gray-400 text-sm mb-1">
                    @{nickname}
                  </span>
                  <span className="text-sm text-gray-400 ml-1 mb-2">
                    {message.time}
                  </span>
                </div>
                <span className="px-6 py-4 rounded-xl inline-block rounded-bl-none bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-gray-200">
                  {message.text}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-md max-w-xs mx-2 order-1 items-end">
              <div>
                <div className="flex">
                  <span className="text-sm text-gray-400 mb-2">
                    {message.time}
                  </span>
                </div>
                <span className="px-6 py-4 rounded-xl inline-block rounded-br-none bg-violet-500 dark:bg-violet-500 text-white">
                  {message.text}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Message
