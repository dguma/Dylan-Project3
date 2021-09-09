const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const io = require('socket.io')(5000, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  })
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Schemas
const User = require('./models/User');
const Message = require('./models/Messages');

//controllers
const userController = require('./controllers/userController');
app.use('/api/users', userController);

const messageController = require('./controllers/messageController');
app.use('/api/messages', messageController);

app.get('/', (req, res) => {
    res.redirect('/api/messages')
})

//io
io.on("connection", socket => {
    Message.find().then( data => {
        socket.emit('message', data)
    })

    console.log('user connected');
    // socket.emit('message', 'hello from backend');
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
    socket.on('chatMessage', (msg) => {
        // const message = new Message({msg});
        // message.save().then(() => io.emit('message', msg) )
        io.emit('message', {
            name: socket.id,
            message: msg
        })
    })
});

app.set('port', process.env.PORT || 4001)

app.listen(app.get('port'), () => {
    console.log(`Server is connected and listening on port: ${app.get('port')}`)
})