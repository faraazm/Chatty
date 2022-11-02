import React, { useEffect, useState } from 'react'

const UsersPanel = ({ socket }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data))
  }, [socket, users])

  return (
    <aside className="flex-col w-auto hidden sm:flex">
      <div className="overflow-y-auto pt-20 px-6 h-screen bg-gray-100 dark:bg-slate-700">
        <ul className="dark:text-white">
          {users.length > 0 &&
            users.map((user) => {
              return (
                <li
                  key={user.socketID}
                  className="flex justify-left items-center mb-4"
                >
                  <div className="overflow-hidden relative w-8 h-8 bg-gray-300 rounded-full dark:bg-gray-600">
                    <svg
                      className="absolute -left-1 w-10 h-10 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="ml-3 text-sm">
                    {localStorage.getItem('nickname') === user.nickname
                      ? `${user.nickname} (you)`
                      : user.nickname}
                  </span>
                </li>
              )
            })}
        </ul>
      </div>
    </aside>
  )
}

export default UsersPanel
