// userAPI.js

import { customAxios } from './customAxios';

export default {
  // 사용자 프로필 조회하기
  getUserInfo(authToken) {
    return customAxios.get('user', {
      headers: {
        Authorization: authToken,
      },
    });
  },
};
