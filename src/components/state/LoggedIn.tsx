import { useState } from "react"

export const LoggedIn=()=>{
    //Here we dont have to write typescript code and defining type because based on initial value
    // which we have passed in useState(false) it automatically infers that value is of boolean type
    // and never going to change...Hover pointer over useState(false) to see its type...

    // But what if user value can change in future...See that in User.tsx file
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const handleLogin=()=>{
        setIsLoggedIn(true)
    }
    const handleLogout=()=>{
        setIsLoggedIn(false)
    }

    return (
        <div>
            <hr/>
            <button onClick={handleLogin}><h2>Login to account</h2></button>
            <button onClick={handleLogout}><h2>Logout to account</h2></button>
            <div>User is {isLoggedIn ? 'logged In' : 'logged Out'}</div>
        </div>
        )
}