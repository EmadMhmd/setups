import { combineReducers } from 'redux';
import fetchReducer from './fetch.reducer';
import statusReducer from './status.reducer';
import listingDataReducser from './listingData.reducer';
import reportingReducser from './report.reducer';

export default combineReducers({
  listingDataReducser,
  fetchReducer,
  statusReducer,
  reportingReducser,
});
