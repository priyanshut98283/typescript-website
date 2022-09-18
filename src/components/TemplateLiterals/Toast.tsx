/*
* Position can be one of 
* "left-center" | "left-top" | "left-bottom" | "center" |"center-top" | "center-bottom" |
* "right-center" | "right-top" | "right-bottom"
*/
type HorizontalPosition="left" | "center" | "right"
type VerticalPosition  ="top"  | "center" | "bottom"

type ToastProps={
    position:`${HorizontalPosition}-${VerticalPosition}`
    //We can Exclude one property by followng syntax...
    // Exclude<position:`${HorizontalPosition}-${VerticalPosition}`,'center-center'>

    // | Exclude<position:`${HorizontalPosition}-${VerticalPosition}`,'center-center'>
    // | 'center'
}

export const Toast=({position}:ToastProps)=>{
return <div>Toast Notification Position- {position}<hr/></div>
}