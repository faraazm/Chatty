import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ socket }) => {
  const navigate = useNavigate()
  const [nickname, setNickname] = useState('')

  const submit = (e) => {
    e.preventDefault()

    if (nickname.trim()) {
      localStorage.setItem('nickname', nickname)
      socket.emit('newUser', { nickname, socketID: socket.id })
      navigate('/chat')
    } else {
      alert('Please enter a nickname')
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 sm:p-8">
            <h1 className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-2">
              chatty
            </h1>
            <p className="text-gray-400 text-md text-center mb-8">
              The world's greatest chat application
            </p>
            <form className="space-y-4 md:space-y-6" onSubmit={submit}>
              <div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter a nickname"
                  onChange={(e) => setNickname(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-violet-500 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-blue-800"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
