const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const io = require('socket.io')(5000, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  })
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//controllers
const userController = require('./controllers/userController');
app.use('/users', userController);

const messageController = require('./controllers/messageController');
app.use('/messages', messageController);

//io
io.on("connection", socket => {
    console.log('user connected');
    // socket.emit('message', 'hello from backend');
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
    socket.on('chatMessage', msg => {
        io.emit('message', msg)
    })
});

const port = process.env.PORT || 6000;

app.listen(port, () => {
    console.log(`Servers is connected and listening on port: ${port}`)
})