import {Name} from './Person.types'
type PersonsListProps={
    names:Name[]
}
export const PersonList=(props:PersonsListProps)=>{
    return (<div>
        {/* <h2>Bruce Wayne</h2>
        <h2>Clark Kent</h2>
        <h2>Great Diana</h2> */}
        {
            props.names.map((name)=>{
                return(
                    <h2 key={name.first}>
                        {name.first} {name.last}
                    </h2>
                )
            })
        }
        <hr/>
    </div>
    )
}