/* eslint-disable class-methods-use-this */
import { Dispatch } from 'redux';
import { userApi } from '../../api';
import { statusAction, fetchAction } from '.';
import { IUser } from '../../interfaces/domain';

class User {
  addUserAction = (user: IUser) => async (dispatch: Dispatch) => {
    try {
      dispatch(statusAction.clearStatus());
      dispatch(fetchAction.fetchingTime());
      const { data: { msg } } = await userApi.addUser(user);
      dispatch(statusAction.addSuccessStatus(msg));
      dispatch(fetchAction.fetchingFailed());
    } catch (e) {
      dispatch(fetchAction.fetchingFailed());
      dispatch(statusAction.addErrorStatus(e));
    }
  };
}

export default new User();
