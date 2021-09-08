import axios from 'axios';
import Chat from './Chat'
import './App.css';
import io from 'socket.io-client';
import React, {useState ,useEffect, Fragment} from 'react'
import ChatPage from './components/ChatPage';

let socket = io('http://localhost:5000');

// const messages = document.getElementById('messages')


function App() {

  const [test, setTest] = useState([]);

  const [iotest, setIoTest] = useState([])

  useEffect(() => {
    socket.on('message', (data) => {
      // console.log(data + ' line 21');
      // setTest(data);
      setIoTest(iotest => [...iotest, (<div>{data}</div>)])
      // setTest(test => [...test, (<div>{event.target.firstChild.value}</div>)]);
    })
  },[setIoTest])


// console.log(test)


// function appendMessages(message) {
//   const html = `<div>${message}</div>`
//   messages.innerHTML += html
// }

const [mongoMessages, setMongoMessages] = useState([]);
useEffect(() => {
  axios.get('http://localhost:4000/api/messages').then(response => {
    // gets the initial data
    setMongoMessages(mongoMessages => [...mongoMessages, response.data])
  })
},[setMongoMessages]);
console.log(mongoMessages)


function submitHandler(event) {
  event.preventDefault();
  // console.log(event.target.firstChild.value)
  socket.emit('chatMessage', event.target.firstChild.value)

  // setTest(...test,event.target.firstChild.value)
  // setTest(test.concat(event.target.firstChild.value));
  setTest(test => [...test, (<div>{event.target.firstChild.value}</div>)]);
  axios.post("http://localhost:4000/api/messages", {
    name: 'User',
    message: event.target.firstChild.value
})
.then((res) => console.log(res.data));
}



  return (

    <Fragment>
      <Chat test={iotest} submitHandler={submitHandler} mongoMessages={mongoMessages}/>
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
