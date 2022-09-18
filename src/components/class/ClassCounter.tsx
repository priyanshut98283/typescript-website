import { Component } from "react";


type CounterProps={
    message:string
}
type CounterState={
    count:number
}

export class ClassCounter extends Component<CounterProps,CounterState>{
    state={
        count:0
    }
    handleClick=()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick}><h2>Increment</h2></button>--
                 {this.state.count} <hr/>{this.props.message}<hr/>
            </div>
            )
    }
}