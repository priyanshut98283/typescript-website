import { PersonProps } from "./Person.types"
// type PersonProps={
//     name:{
//     first:string
//     last:string
//     }
// }

// We are putting type in another file Person.types.ts and importing here....
// This is helpuful when we have multiple type in a file...

export const Person=(props:PersonProps)=>{
    return <div>
        {/* Bruce Wayne */}
        {props.name.first} {props.name.last}<hr/>
        
        </div>
}