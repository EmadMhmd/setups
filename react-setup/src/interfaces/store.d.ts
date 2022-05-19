import IStatus from './status';

interface Store {
    listingDataReducser:string,
    fetchReducer:string,
    messageReducer:string,
    statusReducer:IStatus,
    reportingReducser:string,
}

export default Store;
