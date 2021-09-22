const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
	console.log("We have a new connection!!!");

	socket.on("disconnect", () => {
		console.log("User has left");
	});
});

app.use(router);

server.listen(5000, () => {
	console.log(`Server listening to port ${PORT}`);
});
