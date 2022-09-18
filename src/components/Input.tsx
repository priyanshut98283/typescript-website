import React from "react"

type InputProps={
    value:string
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
export const Input=(props:InputProps)=>{
    // const HandleInputChange=(event:React.MouseEvent<HTMLButtonElement>)=>{
    //     console.log(event)
    // }
    // handleChange can be used as props or like this and just calling HandleInputChange instead of props.handleChange...
    return (
    <div>
        <h5>Click the Button and enter something in Inputbox and See Console...</h5>
        <input type="text" value={props.value} onChange={props.handleChange}/><hr/>
    </div>
    )
}