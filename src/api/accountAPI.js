import { customAxios } from './customAxios';

// export const signUp = async (data) => {
//   const res = await customAxios.post('/join', data);
//   return res;
// };
// export const sendEmailCertification = async (data) => {
//   const res = await customAxios.post('/email-auth', data);
//   return res;
// };
export default {
  signUp(data) {
    return customAxios.post('join', data);
  },
};
