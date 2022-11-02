import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const disconnect = () => {
    localStorage.removeItem('nickname')
    navigate('/')
    window.location.reload()
  }

  return (
    <nav className="bg-white dark:bg-slate-600 px-4 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-300 dark:border-slate-700">
      <div className="container-fluid flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Chatty
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={disconnect}
            className="text-white bg-violet-500 hover:bg-violet-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0"
          >
            Leave
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
