const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const uuid=require('uuid')
const path = require('path')
const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {})
app.use('/', express.static(path.join(__dirname, 'public')))
io.engine.generateId=(req) => {
  return uuid.v4();
}
io.on("connection", socket => {
	socket.join('room1')
	socket.on("newconnection", (args)=>{
		console.log(args+' '+socket.id)
	})
	socket.on("message", (args)=>{
		return io.in("room1").emit('reciveMessage', args)
	})
})
httpServer.listen(process.env.PORT || 4000, ()=>{
	console.clear()
	console.log(`info: server V:3.0.1 Client: 3.0.0`)
  console.log(`---------------------[Cardial Online]---------------------`)
})
