import axios from 'axios';
import { CONFIG } from './config';

const ROOT_URL = CONFIG.ROOT_URL;

export const FETCH_USER = 'fetch_user';

export function fetchUser(values){
   const request = axios.post(`${ROOT_URL}login`, values)
   
   return {
      type: FETCH_USER,
      payload: request
   }
}

export const REGISTER_USER = 'register_user';

export function registerUser(values){
   const request = axios.post(`${ROOT_URL}register`, values)


   return {
      type: REGISTER_USER,
      payload: request
   }
}