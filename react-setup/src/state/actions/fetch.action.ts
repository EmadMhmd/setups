/* eslint-disable class-methods-use-this */
import { FETCHING_TIME, FETCHING_FAILED } from './action.d';

class Fetch {
  fetchingTime = () => ({ type: FETCHING_TIME });

  fetchingFailed = () => ({ type: FETCHING_FAILED });
}
export default new Fetch();
