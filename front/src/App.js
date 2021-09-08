import logo from './logo.svg';
import Chat from './Chat'
import './App.css';
import io from 'socket.io-client';
import React, {useState ,useEffect} from 'react'
import ChatPage from './components/ChatPage';

let socket = io('http://localhost:5000');

// const messages = document.getElementById('messages')


function App() {

  const [test, setTest] = useState([]);

  

  useEffect(() => {
    socket.on('message', (data) => {
      console.log(data);
      // setTest(data);
    })
  },[test])


console.log(test)


// function appendMessages(message) {
//   const html = `<div>${message}</div>`
//   messages.innerHTML += html
// }

function submitHandler(event) {
  event.preventDefault();
  // console.log(event.target.firstChild.value)
  
  socket.emit('chatMessage', event.target.firstChild.value)

  // setTest(...test,event.target.firstChild.value)
  // setTest(test.concat(event.target.firstChild.value));
  setTest(test => [...test, (<div>{event.target.firstChild.value}</div>)]);

}



  return (

    <div>

      <Chat test={test } submitHandler={submitHandler}/>
        



    <div className="App">
      <ChatPage test={ test } />
      <header className="App-header">
        <h1>Welcome</h1>
        <div>{test}</div>
      </header>
      <form id='messageForm' action='' onSubmit={submitHandler}>
        <input type='text' name='message' />
        <button>Send</button>
      </form>

    </div>
  );
}

export default App;
