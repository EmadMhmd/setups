import { FETCHING_TIME, FETCHING_FAILED } from './action.d';

export const fetchingTime = () => ({ type: FETCHING_TIME });

export const fetchingFailed = () => ({ type: FETCHING_FAILED });
