import Head from './Components/Header';
import Login from './Components/Login';
import Main from './Components/Main';
import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(false)

  setInterval(() =>{
     if(localStorage.getItem('profile')){
      setUser(true)
     }else{
      setUser(false)
     }
  },300)
  return (
    <div>
    {user ? (
      <>
        <Head />
        <Main />
      </>
    ) : (
      <Login />
    )}
  </div>
  );
}
export default App;
