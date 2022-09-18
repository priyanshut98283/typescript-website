import { useRef,useEffect } from "react";

export const Domref=()=>{
    // const inputRef=useRef<HTMLInputElement>(null)
    const inputRef=useRef<HTMLInputElement>(null!)
    useEffect(()=>{
        // inputRef.current?.focus()
        inputRef.current.focus()
    },[])
    return (<div>
        <input type="text" ref={inputRef}/><hr/>
    </div>)
}