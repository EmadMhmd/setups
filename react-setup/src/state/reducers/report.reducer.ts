import { REPORT_CREATED, REPORT_FETCHED } from '../actions/action.d';

const initState = {
  reportVariables: {},
  created: '',
};

const listingDataReducser = (state = initState, action) => {
  switch (action.type) {
    case REPORT_CREATED:
      return { ...state, created: true };
    case REPORT_FETCHED:
      return { ...state, reportVariables: action.payload };
    default:
      return state;
  }
};

export default listingDataReducser;
