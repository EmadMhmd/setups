/* eslint-disable class-methods-use-this */
import { ERROR_STATUS_ADDED, SUCCESS_STATUS_ADDED, STATUS_CLEARED } from './action.d';

class Status {
  addErrorStatus = (e: Error) => {
    const { response: { data: { error } } } = e;
    return { type: ERROR_STATUS_ADDED, payload: error };
  };

  addSuccessStatus = (message : string) => ({
    type: SUCCESS_STATUS_ADDED, payload: message,
  });

  clearStatus = () => ({ type: STATUS_CLEARED });
}

export default new Status();
