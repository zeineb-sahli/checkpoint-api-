import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListOfUser from './ListOfUser';

function App() {
  const [userData, setUserData] = useState([{ name: '', email: '', id: '' }])
  const [err, setErr] = useState('no data found')


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      setUserData(res.data)
      console.log(userData)
    }).catch(error => {
      setErr(error)
      alert(err)
    })
  }, []);

  return (
    <div className="App">
      <ListOfUser userData={userData} />
    </div>
  );
}

export default App;
