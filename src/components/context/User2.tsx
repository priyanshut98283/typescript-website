import { useContext } from "react"
import { UserContext } from "./UserContext"
export const User2=()=>{
    const userContext=useContext(UserContext)
    const handleLogin=()=>{
        // if(userContext){
            userContext.setUser({
                name:'P.T.',
                email:'P.T.@gmail.com'
            })
        // }
    }
    const handleLogout=()=>{
        // if(userContext){
            userContext.setUser(null)
        // }
    }
    return (
        <div>
            <hr/>
            <div><h5>useContext Future Value...</h5></div>
            <button onClick={handleLogin}><h3>Login User</h3></button>
            <button onClick={handleLogout}><h3>Logout User</h3></button>
            {/* <div>User Name is {userContext?.user?.name}</div>
            <div>User Name is {userContext?.user?.email}</div> */}
            <div>User Name is {userContext.user?.name}</div>
            <div>User Name is {userContext.user?.email}</div><hr/>
        </div>
        )
}