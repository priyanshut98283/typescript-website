type HeadingProps = {
    children:string
}
export const Heading=(props:HeadingProps)=>{
    return (
    // <h2>Placeholder Text</h2>
    <h2>{props.children}</h2>
    )
}