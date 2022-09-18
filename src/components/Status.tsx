type StatusProps={
    // status:string
    status:'loading' | 'success' | 'error'
}
export const Status=(props:StatusProps)=>{
    let message;
    if(props.status==='loading' ){
        message="Loading..."
    }
    else if(props.status==='success'){
        message="Data Fetched Successfully"
    }
    else if(props.status==='error'){
        message="Error Loading Data"
    }
    return(
        <div>
            {/* <h2>Loading...</h2>
            <h2>Data Fetched Successfully</h2>
            <h2>Error Loading Data</h2> */}
            <h2>Status- {message}</h2>
        </div>
    )
}