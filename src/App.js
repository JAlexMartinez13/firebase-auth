import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import Welcome from './scenes/Welcome';


function App() {
  const [user, setUser] = useState();

  useEffect(()=> {
    console.log('Here is my useEffect')
  },
  [])
  
  return (
   <Routes>
     <Route path='/login' element={<Login setUser={setUser} user={user}/>}/>
     <Route path='/signup' element={<Signup setUser={setUser} />}/>
     <Route path='/' element={user ? <Welcome user={user} setUser={setUser}/> : <Login setUser={
       setUser}/>}/>
   </Routes>
  );
}
     

export default App;
