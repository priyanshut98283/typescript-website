type RandomNumberType={
    value:number
}
type PositiveNumber= RandomNumberType &{
    isPositive:boolean
    isNegative?:never
    isZero?:never
}

type NegativeNumber=RandomNumberType &{
    isNegative:boolean
    isPositive?:never
    isZero?:never
}
type Zero=RandomNumberType &{
    isZero:boolean
    isPositive?:never
    isNegative?:never
}

// type RandomNumberProps={
//     value:number
//     isPositive?:boolean
//     isNegative?:boolean
//     isZero?:boolean
// }
type RandomNumberProps=PositiveNumber | NegativeNumber | Zero

export const RandomNumber=({value,isPositive,isNegative,isZero}:RandomNumberProps)=>{
    return (<div>
        <div>Restriction Example</div>
        {value} {isPositive && 'Positive'} {isNegative && 'Negative'} {' '} {isZero && 'Zero'}<hr/>
    </div>)
}
