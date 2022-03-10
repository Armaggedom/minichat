function connect() {
	try{
		import {io} from "socket.io-client";
		const socket = io()
	    socket.on("connect", () => {
	    	return socket.emit("hello", 'connectado')
	    })
    } catch(error){return alert(error)}
}