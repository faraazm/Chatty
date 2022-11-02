import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import ChatLayout from './components/ChatLayout'
import socketIO from 'socket.io-client'

const socket = socketIO.connect('http://localhost:8080')

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login socket={socket} />}></Route>
      <Route path="/chat" element={<ChatLayout socket={socket} />}></Route>
    </Routes>
  </BrowserRouter>
)

export default App
