import { IFetch, IStatus } from './index';

interface Store {
    fetchReducer:IFetch,
    statusReducer:IStatus,
}

export default Store;
