import {useState,useRef,useEffect} from 'react'

export const Mutableref=()=>{
    const [timer,setTimer]=useState(0)
    const intervalRef=useRef<number | undefined>(undefined)
    const stopTimer=()=>{
        // if(intervalRef.current) use this if used null above in place of undefined...
        window.clearInterval(intervalRef.current)
    }
    useEffect(()=>{
        intervalRef.current=window.setInterval(()=>{
            setTimer(()=>timer+1)
        },1000)
        return(()=>{
            stopTimer()
        })
    },[timer])
    return (<div>
        HookTimer-{timer}-
        <button onClick={()=>stopTimer()}>Stop Timer</button><hr/>
    </div>)
}