// accountAPI.js

import { customAxios } from './customAxios';

export default {
  emailAuth(data) {
    return customAxios.post('email_auth', data);
  },
  signUp(data) {
    return customAxios.post('join', data);
  },
  signIn(data) {
    return customAxios.post('login', data);
  },
  logout(authToken) {
    return customAxios.get('logout', {
      headers: {
        Authorization: authToken,
      },
    });
  },
};
