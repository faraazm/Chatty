const express = require('express')
const app = express()
const PORT = 8080

const server = require('http').createServer()
const cors = require('cors')

app.use(cors())
let users = []

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  console.log(`${socket.id} user just connected`)

  socket.on('message', (data) => {
    io.emit('messageResponse', data)
  })

  socket.on('typing', (data) => {
    // to all connected clients except the sender
    socket.broadcast.emit('typingResponse', data)
  })

  socket.on('newUser', (data) => {
    users.push(data)
    io.emit('newUserResponse', users)
  })

  socket.on('disconnect', () => {
    console.log(`A user disconnected`)
    users = users.filter((user) => user.socketID !== socket.id)
    io.emit('newUserResponse', users)
    socket.disconnect()
  })
})

server.listen(PORT, () => {
  console.log(`Socket listening on port ${PORT}`)
})
