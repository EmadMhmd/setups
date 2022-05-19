import { ERROR_STATUS_ADDED, SUCCESS_STATUS_ADDED, STATUS_CLEARED } from './action.d';

export const addErrorStatus = (e: Error) => {
  const { response: { data: { error } } } = e;
  return { type: ERROR_STATUS_ADDED, payload: error };
};

export const addSuccessStatus = (message : string) => ({
  type: SUCCESS_STATUS_ADDED, payload: message,
});

export const clearStatus = () => ({ type: STATUS_CLEARED });
