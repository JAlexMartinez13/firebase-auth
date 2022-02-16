

export default function Welcome( {user} ){
      //email, displayName, photoURL
    return (
    <>
        <h1>Welcome</h1>
        <h2>{user.displayName || user.email}</h2>
        {user.photoURL && <img src={user.photoURL} 
        alt="Profile pic of logged-in user"/>}
    </>
    )
}


 