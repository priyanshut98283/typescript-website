type GreetProps={
    name:string
    messageCount:number
    // messageCount?:number
    // This syntax is used when it is not necessary to pass messageCount in App.tsx .Without this syntax,
    // if we will not pass messageCount ,Typescript will throw an error
    isLoggedIn:boolean
}
export const Greet=(props:GreetProps)=>{
    // const {messageCount=0}=props -> Destructuring Syntax
    return (
        <div>
            <h2>
                {props.isLoggedIn ? `Welcome ${props.name} You have ${props.messageCount} Unread Messages.`
                : "Welcome Guest"}<hr/>
                </h2>
        </div>)
}
//Use type for making UI and Interface for building Libraries...
//Typecript takes props as type like string,int which we have to define as done...