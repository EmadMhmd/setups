import { ADDED } from './action.d';
import { addUser } from '../../api/user.api';
import { addSuccessStatus, addErrorStatus, clearStatus } from './status.action';
import { fetchingFailed, fetchingTime } from './fetch.action';
import IUser from '../../interfaces/user';

// eslint-disable-next-line import/prefer-default-export
export const addUserAction = (user: IUser) => async (dispatch) => {
  try {
    dispatch(clearStatus());
    dispatch(fetchingTime());
    const { data: { msg } } = await addUser(user);
    dispatch({ type: ADDED });
    dispatch(addSuccessStatus(msg));
    dispatch(fetchingFailed());
  } catch (e) {
    dispatch(fetchingFailed());
    dispatch(addErrorStatus(e));
  }
};

// export const listingDataAction = (name)=>{
//     return async dispatch =>{
//         try{
//             dispatch(clearError())
//             dispatch(clearMessage())
//             dispatch(fetchingTime())
//             const {data : {msg , company}} = await listingDataApi(name);
//             console.log("company : " ,msg, company)
//             dispatch({type : LISTING_DATA_FETCHING , payload:company });
//             dispatch(addMessage(msg))
//             dispatch(fetchingFailed())
//         }catch(e){
//             console.log('err from listing data action')
//             dispatch(fetchingFailed())
//             dispatch(addError(e))
//         }
//     }
// }

// export const gatheringDataAction = (data)=>{
//     return async dispatch =>{
//         try{

//             dispatch(clearError())
//             dispatch(clearMessage())
//             dispatch(fetchingTime())
//             const {data : {msg}} = await gatheringDataApi(data);
//             //dispatch({type : DATA_GATHERING });
//             dispatch(addMessage(msg))
//             dispatch(fetchingFailed())
//         }catch(e){
//             dispatch(fetchingFailed())
//             dispatch(addError(e))
//         }
//     }
// }

// export const addUser = (data)=>{
//     return async dispatch =>{
//         try{

//             dispatch(clearError())
//             dispatch(clearMessage())
//             dispatch(fetchingTime())
//             const {data : {msg}} = await gatheringDataApi(data);
//             //dispatch({type : DATA_GATHERING });
//             dispatch(addMessage(msg))
//             dispatch(fetchingFailed())
//         }catch(e){
//             dispatch(fetchingFailed())
//             dispatch(addError(e))
//         }
//     }
// }

// export const creatingReportAction = (data)=>{
//     return async dispatch =>{
//         try{

//             dispatch(clearError())
//             dispatch(clearMessage())
//             dispatch(fetchingTime())
//             const {data : {msg}} = await createReportApi(data);
//             //dispatch({type :  });
//             dispatch(addMessage(msg))
//             dispatch(fetchingFailed())
//         }catch(e){
//             dispatch(fetchingFailed())
//             dispatch(addError(e))
//         }
//     }
// }
