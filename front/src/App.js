import axios from 'axios';
import Chat from './Chat'
import './App.css';
import io from 'socket.io-client';
import React, {useState ,useEffect, Fragment} from 'react'
import ChatPage from './components/ChatPage';
import { useLocation } from "react-router";



// const messages = document.getElementById('messages')
let socket = io('http://localhost:5000');

function App() {

  // let location = useLocation();

 

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([])
  

useEffect(() => {
  socket.on('message', (message) => {
       setMessages([...messages, message])
   })
},[messages])

// console.log(messages)

const [mongoMessages, setMongoMessages] = useState([]);

useEffect(() => {
  axios.get('http://localhost:4001/api/messages').then(response => {
    // gets the initial data
    setMongoMessages(response.data)
  })
},[messages]);


function submitHandler(event) {
  event.preventDefault();

  socket.emit('chatMessage', event.target.firstChild.value);

  axios.post("http://localhost:4001/api/messages", {
    name: 'User',
    message: event.target.firstChild.value
  })
  .then(res => console.log(res.data))
  .then(() => event.target.firstChild.value = '')
  .catch(error => console.log(error))

  }

  const sendMessage = (event) => {
    event.preventDefault(); 
    
    if(message) {
      socket.emit('chatMessage', message);
    }
  }


  return (

    <Fragment>
      <Chat 
        message={message}
        messages={messages} 
        submitHandler={submitHandler} 
        mongoMessages={mongoMessages} 
        sendMessage={sendMessage}
        setMessage={setMessage}
      />
      {/* <div className="App">
        <header className="App-header">
          <h1>Welcome</h1>
          <div>{iotest}</div>
        </header>
        <form id='messageForm' action='' onSubmit={submitHandler}>
          <input type='text' name='message' />
          <button>Send</button>
        </form>
      </div>    */}
    </Fragment>
  );
}

export default App;
