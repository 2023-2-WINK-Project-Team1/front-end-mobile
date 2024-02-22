// rentalAPI.js

import { customAxios } from './customAxios';

export default {
  // 전체 대역 내역 조회하기 - 관리자
  getAllRentalList(authToken) {
    return customAxios.get('rental/all', {
      headers: {
        Authorization: authToken,
      },
    });
  },
  // 사용자 대여 내역 조회하기
  getUserRentalList(authToken, notification) {
    return customAxios.get('rental', {
      headers: {
        Authorization: authToken,
      },
    });
  },
  // 사용자 대여 신청하기
  requestRental(authToken, rentalData) {
    return customAxios.post(
      'rental',
      { item_id: rentalData.item_id, count: rentalData.count },
      {
        headers: {
          Authorization: authToken,
        },
      },
    );
  },
  // 사용자 대여 신청 취소하기 - 사용자
  cancelRental(authToken, rentalId) {
    return customAxios.delete(`rental/${rentalId}`, {
      headers: {
        Authorization: authToken,
      },
    });
  },

  // 사용자 대여 신청 승인하기 - 관리자
  approveRental(authToken, rentalId) {
    return customAxios.post(`rental/approve/${rentalId}`, {
      headers: {
        Authorization: authToken,
      },
    });
  },
};
