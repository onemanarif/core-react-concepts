import React, { useState, useReducer, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person={
    name: "shaikh Arif",
    job: "student"
  }
  var person2={
    name:"oneman arif",
    job: "Youtuber"
  }
  const stdname=['arif','noamn','adsffd','sdfds','sdfsdaa']
  const studentname= stdname.map(stdname => stdname);  
  console.log(studentname);
  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to student profile</h1>
        <ul>
          {
            stdname.map(stdname => <li>{stdname}</li>)
          }
        </ul>
        <Student name="arif" id="01"></Student>
        <Student name="oneman" id="02"></Student>
        <Student name="noman" id="03"></Student>
          <Counter></Counter>
          <User></User>
      </header>
    </div>
  );
}
function User(){
  const [users, setUser] =useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));

  },[])
  return(
    <div>
      <h2>Dynamic User: {users.length}</h2>  
      <ul>
        { users.map(users => <li>{users.name}</li>)}
      </ul>
    </div>
  )
 
}
function Counter(){
  const [count, setCount ] = useState(0);
  const handelIncrease = () => {
    const newCount = count +1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() =>setCount(count-1)}>Decrease</button>
      <button onClick={handelIncrease}>Increase</button>
    </div>
  )
}

function Student(props){
  return (
    <div>
      <p>Name:{props.name}Id:{props.id}</p>
    </div>
  )
}

export default App;
