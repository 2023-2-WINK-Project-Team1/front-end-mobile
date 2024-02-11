import { customAxios } from './customAxios';

export default {
  signUp(data) {
    return customAxios.post('email_auth', data);
  },
};
