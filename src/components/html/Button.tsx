import React from "react";

type ButtonProps = {
    variant:'primary' | 'secondary'
} & React.ComponentProps<'button'>

// In upper line,Omiting Syntax-> & Omit<React.ComponentProps<'button'>,'children>

export const CustomButton=({variant,children,...rest}:ButtonProps)=>{
    return (<div>
        <h5>Wrapping Html Elements Example...Click Button and See Console...</h5>
        <button className={`class-with-${variant}`}{...rest}>
    {children}
    </button><hr/></div>
    )
}