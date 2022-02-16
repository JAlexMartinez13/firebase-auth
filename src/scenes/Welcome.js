import { useNavigate } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth"


export default function Welcome( {user, setUser} ){
     console.log(user) //email, displayName, photoURL

     const auth = getAuth()
     const navigate = useNavigate()

     const handleLogout = () => {
         signOut(auth)
         .then(()=>{
             navigate('/login')
             localStorage.clear()
            })
        .catch(err=> console.log(err))
    }
        
      
    return (
    <>
        <h1>Welcome</h1>
        <h2>{localStorage.getItem('displayName') || user.email}</h2>
        {localStorage.getItem('profilePhoto')
        && <img src={localStorage.getItem('profilePhoto')} 
        alt="Profile pic of logged-in user"/>}
        <button onClick={handleLogout}>Sign out</button>
    </>
    )
}
        


 