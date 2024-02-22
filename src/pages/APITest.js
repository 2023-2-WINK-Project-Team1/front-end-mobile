// APITest.js
import Layout from '../components/layout/Layout';
import styled from 'styled-components';
import accountAPI from '../api/accountAPI';
import userAPI from '../api/userAPI';
import notificationAPI from '../api/notificationAPI';
import rentalAPI from '../api/rentalAPI';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const APIButton = styled.button`
  height: 40px;
  border-radius: 10px;
  background-color: #ffd600;
`;
function APITest() {
  const [cookies, setCookies, removeCookie] = useCookies(['auth_token']); // 쿠키 훅
  const [isNotification, setIsNotification] = useState(false); // 알림 여부 [true: 알림 있음, false: 알림 없음
  const [itemId, setItemId] = useState('65bf3198c9068e44fff72bce'); // 물품 아이디
  const rentalId = '65c337ce52c7b5d08e08be3a'; // 대여 아이디
  const adminCookie =
    'eyJhbGciOiJIUzI1NiJ9.NjVjMzQwMWZlNzFjZjE2YjVlODFkNWI0.ctbykqlWUc5wgVsfnZgrysNRU3u33-SJHbphNuVs61M';

  const headerProps = {
    // header에 들어갈 페이지 제목은 여기서 수정
    title: '물품 대여',
  };
  const emailAuth = async () => {
    const data = {
      email: 'heegun4690@kookmin.ac.kr',
    };
    const res = await accountAPI.emailAuth(data);
    console.log('emailAuth res : ', res);
  };
  const signUp = async () => {
    const data = {
      user_number: '20181574',
      name: '곽희건',
      email: 'heegun4690@kookmin.ac.kr',
      code: '2d5dec',
      password: 'babo1234',
      password2: 'babo1234',
    };
    const res = await accountAPI.signUp(data);
    console.log('signUp res : ', res);
  };

  const signIn = async () => {
    const data = {
      user_number: '20181574',
      password: 'babo1234',
    };
    try {
      const res = await accountAPI.signIn(data);
      console.log('res : ', res);

      // 로그인 성공 후 받은 토큰을 쿠키에 저장
      await setCookies('auth_token', res.data.user.token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const whatIsisNotification = async () => {
    console.log('isNotification : ', isNotification);
  };
  const logout = async () => {
    const cookie = cookies.auth_token;
    console.log('cookie : ', cookie);
    const res = await accountAPI.logout(cookie);
    removeCookie('auth_token'); // 쿠키를 삭제
    console.log('logout res : ', res);
  };

  const getUserInfo = async () => {
    const cookie = cookies.auth_token;
    const res = await userAPI.getUserInfo(cookie);
    console.log('getUserInfo res : ', res);
  };

  const getNotification = async () => {
    const cookie = cookies.auth_token;
    const res = await notificationAPI.getNotification(cookie);
    console.log('getNotification res : ', res);
    setIsNotification(res.data.notification);
    console.log('isNotification : ', isNotification);
  };

  const setNotification = async () => {
    const cookie = cookies.auth_token;
    const res = await notificationAPI.setNotification(cookie, !isNotification);
    console.log('setNotification res : ', res);
    console.log('isNotification : ', isNotification);
  };

  // Rental
  // 관리자 대여 내역 조회
  const getAllRentalList = async () => {
    // const cookie = cookies.auth_token;
    const cookie = adminCookie;
    const res = await rentalAPI.getAllRentalList(cookie);
    console.log('getAllRentalList res : ', res);
  };
  // 사용자 대여 내역 조회
  const getUserRentalList = async () => {
    const cookie = cookies.auth_token;
    const res = await rentalAPI.getUserRentalList(cookie);
    console.log('getUserRentalList res : ', res);
  };
  // 대여 신청
  const requestRental = async (itemId, count) => {
    const cookie = cookies.auth_token;
    const rentalData = {
      item_id: itemId,
      count: count,
    };
    const res = await rentalAPI.requestRental(cookie, rentalData);
    console.log('requestRental res : ', res);
  };
  // 대여 취소 - 사용자
  const cancelRental = async (rentalId) => {
    const cookie = cookies.auth_token;
    const res = await rentalAPI.cancelRental(cookie, rentalId);
    console.log('cancelRental res : ', res);
  };
  // 대여 승인 - 관리자
  const approveRental = async (rentalId) => {
    const cookie = adminCookie;
    const res = await rentalAPI.approveRental(cookie, rentalId);
    console.log('approveRental res : ', res);
  };

  const returnRental = async (rentalId) => {
    const cookie = adminCookie;
    const res = await rentalAPI.returnRental(cookie, rentalId);
    console.log('returnRental res : ', res);
  };

  // item - 보류

  return (
    <div>
      <Layout headerProps={headerProps}>
        {/*<h1>1팀 화이팅 ~!</h1>*/}
        <MainContainer>
          <ButtonContainer>
            <h3>Account</h3>
            <APIButton onClick={emailAuth}>emailAuth</APIButton>
            <APIButton onClick={signUp}>signUp</APIButton>
            <APIButton onClick={signIn}>signIn</APIButton>
            <APIButton onClick={whatIsisNotification}>
              whatIsisNotification
            </APIButton>
            <APIButton onClick={logout}>logout</APIButton>
            <h3>User</h3>
            <APIButton onClick={getUserInfo}>getUserInfo</APIButton>
            <APIButton onClick={getNotification}>getNotification</APIButton>
            <APIButton onClick={setNotification}>setNotification</APIButton>
            <h3>Rental</h3>
            <APIButton onClick={getAllRentalList}>getAllRentalList</APIButton>
            <APIButton onClick={getUserRentalList}>getUserRentalList</APIButton>
            <APIButton onClick={() => requestRental(itemId, 1)}>
              requestRental
            </APIButton>
            <APIButton onClick={() => cancelRental(rentalId)}>
              cancelRental
            </APIButton>
            <APIButton onClick={() => approveRental(rentalId)}>
              approveRental
            </APIButton>
            <APIButton onClick={() => returnRental(rentalId)}>
              returnRental
            </APIButton>
          </ButtonContainer>
        </MainContainer>
      </Layout>
    </div>
  );
}

export default APITest;
