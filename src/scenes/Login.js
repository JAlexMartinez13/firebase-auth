import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../ConnectAuth';
import Button from 'react-bootstrap/Button';


export default function Login({ setUser, user }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app)

    useEffect(()=>{
        
        const localUser =localStorage.getItem('displayName')    

        console.log('localUser from LS', localUser)   

        if(localUser) setUser(localUser)

    },[])


    const handleFormSubmit = (e)=> {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
           setUser(result.user)
           navigate('/')
        })
        .catch(alert)
    }
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            setUser(result.user)
            localStorage.setItem('displayName', result.user.displayName)
            localStorage.setItem('profilePhoto', result.user.photoURL)
            console.log('this is my result', result.user.displayName)
            navigate('/')
         })
         .catch(alert)
    }
    console.log('Here is my user from my parent app', user)
    return (
        <>
        <h1>Login</h1>
        <hr />
        <form onSubmit={handleFormSubmit}>
            <label>Email:
                 <input placeholder="Email" type='email' value={email}
                 onChange={e =>  setEmail(e.target.value)}/>
                 </label>
            <br />
            <label>Password:
                 <input placeholder="Password" type='password' value={password}
                   onChange={e =>  setPassword(e.target.value)}/>
                   </label>
            <br />
            <input type='submit' value='login'/>
        </form>
        <button 
        onClick={handleGoogleLogin} 
          style={{
            backgroundColor:'tan',
            color:'black',
            border:'none'}}>
            Sign in with Google</button>
            <br/>
           
        <p>Not a user?<Link to='/signup'>Sign up</Link></p>
        </>
    )
}