interface Status {
    message:string,
    type:string,
    addErrorStatus:Function,
    addSuccessStatus:Function,
    clearStatus:Function,
}

export default Status;
