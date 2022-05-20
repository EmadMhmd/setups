import { FETCHING_FAILED, FETCHING_TIME } from '../actions/action.d';

const initState = {
  fetching: false,
};

const fetchReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHING_TIME:
      return { ...state, fetching: true };
    case FETCHING_FAILED:
      return { ...state, fetching: false };
    default:
      return state;
  }
};

export default fetchReducer;
