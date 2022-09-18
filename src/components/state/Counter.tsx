import { useReducer } from "react"

type CounterState={
    count:number
}
/*type CounterAction={
    // type:string
    // Since we can pass any type in action as type is string ...it can be wrong so,we use 
    // Strict Action Types... as done below...
    type:'increment' | 'decrement' |'reset'
    payload:number
}
*/
type UpdateAction={
    // Strict Action Types Below...
    type:'increment' | 'decrement'
    payload:number
}
type ResetAction={
    type:'reset'
}
type CounterAction=UpdateAction | ResetAction
const initialState={count:0}
function reducer(state:CounterState,action:CounterAction){
    switch(action.type){
        case 'increment':
            return{count:state.count + action.payload}
        case 'decrement':
            return{count:state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }
}
export const Counter=()=>{
    //if wants to use as props hover over state and dispatch in down line and copy type...
    //This is very helpful...
    const [state,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
        Count:{state.count}<hr/>
        <button onClick={()=>dispatch({type:'increment',payload:10})}><h3>Increment 10 </h3></button>
        <button onClick={()=>dispatch({type:'decrement',payload:10})}><h3>Decrement 10</h3></button>
        <button onClick={()=>dispatch({type:'reset'})}><h3>Reset Button</h3></button>
        <hr/>
        </div>

    )


}