import logo from './logo.svg';
import Chat from './Chat'
import './App.css';
import io from 'socket.io-client';
import React, {useState ,useEffect} from 'react'

let socket = io('http://localhost:5000');




function App() {

  const [test, setTest] = useState([]);

  

  useEffect(() => {
    socket.on('message', (data) => {
      console.log(data);
      // setTest(data);
    })
  },[test])


console.log(test)

function submitHandler(event) {
  event.preventDefault();
  console.log(event.target.firstChild.value)
  
  socket.emit('chatMessage', event.target.firstChild.value)
  setTest(test.concat(event.target.firstChild.value))
}

  return (
    <div>

      <Chat test={test } submitHandler={submitHandler}/>
        


    </div>
  );
}

export default App;
