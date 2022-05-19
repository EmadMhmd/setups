import { ADDED, DELETED, UPDATED } from '../actions/action.d';

const initState = {
  added: false,
  deleted: false,
  updated: false,
};

const fetchReducer = (state = initState, action) => {
  switch (action.type) {
    case ADDED:
      return { ...state, ADDED: true };
    case DELETED:
      return { ...state, deleted: true };
    case UPDATED:
      return { ...state, updated: true };
    default:
      return state;
  }
};

export default fetchReducer;
