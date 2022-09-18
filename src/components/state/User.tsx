import { useState } from "react";

type AuthUser={
    name:string
    email:string
}

export const User=()=>{
    const [user,setUser]=useState<AuthUser | null>(null)
    //Instead of passing null in useState(null) we can use useState({} as AuthUser)
    //The upper used syntax is called Type Assertion which means we say to typescript that in future
    // we are not going to change value to null or anything as typescript always complains😂😁
    //After this we can remove optional chaining operator...

    // The above code useState<AuthUser | null> says current value is null but in future it can be
    //  null or of AuthUser type that is string...
    const handleLogin=()=>{
        setUser({
            name:'P.T.',
            email:'P.T.@gmail.com'
        })
    }
    const handleLogout=()=>{
        setUser(null)
    }
    return (
        <div>
            <hr/>
            <button onClick={handleLogin}><h2>Login to account</h2></button>
            <button onClick={handleLogout}><h2>Logout to account</h2></button>
            <div>User Name is {user?.name}</div>
            <div>User Email is {user?.email}</div><hr/>
            {/* We used Optional Chaining Operator above because user can be null or of AuthUser type... */}
        </div>
        )
}