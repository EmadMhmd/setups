import { LISTING_DATA_FETCHING } from '../actions/action.d';

const initState = {
  company: [],
};

const listingDataReducser = (state = initState, action) => {
  switch (action.type) {
    case LISTING_DATA_FETCHING:
      return { ...state, company: action.payload };
    default:
      return state;
  }
};

export default listingDataReducser;
