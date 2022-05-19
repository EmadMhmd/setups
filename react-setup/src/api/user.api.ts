import axios from 'axios';
import IUser from '../interfaces/user';
import vars from '../config/env.config';

// let END_POINT : string | boolean = '';

// if (process.env.REACT_APP_BACKEND_BASE_URL) {
//   END_POINT = process.env.REACT_APP_BACKEND_BASE_URL;
// } else if (import.meta.env.REACT_APP_BACKEND_BASE_URL) {
//   END_POINT = import.meta.env.REACT_APP_BACKEND_BASE_URL;
// }
const backendUrl = vars.get('backendUrl');

export const addUser = (user : IUser) => axios.post(`${backendUrl}/addUser`, user);

export const deleteUser = (user : IUser) => axios.post(`${backendUrl}/addUser`, user);
