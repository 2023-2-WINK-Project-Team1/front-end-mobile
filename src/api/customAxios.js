import axios from 'axios';
import { Cookies } from 'react-cookie';

export const customAxios = axios.create({
  baseURL: process.env.REACT_APP_DOMAIN, // 기본 서버 주소 입력
});
