import { customAxios } from './customAxios';

export default {
  emailAuth(data) {
    return customAxios.post('email_auth', data);
  },
};
