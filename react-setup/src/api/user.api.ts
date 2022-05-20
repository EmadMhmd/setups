/* eslint-disable class-methods-use-this */
import axios from 'axios';
import IUser from '../interfaces/domain/user';
import vars from '../config/env.config';

const backendUrl = vars.get('backendUrl');

class User {
  addUser = (user : IUser) => axios.post(`${backendUrl}/addUser`, user);
}

export default new User();
