import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import { useRecoilState } from 'recoil';
import Item from '../components/Item';
import { ReactComponent as TitleIcon } from '../assets/title.svg';
import { selectedButtonState } from '../recoil/recoil';
import userAPI from '../api/userAPI';
import { useCookies } from 'react-cookie';
import rentalAPI from '../api/rentalAPI';
import { useNavigate } from 'react-router-dom';
import itemAPI from '../api/itemAPI';

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;  틈이 생기는 게 이거 때문인 거 같아서 수정
  gap: 30px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 146px;
  background-color: var(--primary-color);
  padding: 36px 0 0 20px;
  box-sizing: border-box;
`;

const PersonWrapper = styled.div`
  color: var(--white-color);
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 12px;
`;

const InfoWrapper = styled.div`
  color: var(--white-color);
  font-size: 16px;
  font-weight: 500;
`;

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 28px;
  box-sizing: border-box;
`;

const HistoryTitleContainer = styled.div`
  display: flex;
  color: var(--black-color);
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 12px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: var(--black-color);
`;

function MyPage() {
  const [cookies, setCookies, removeCookie] = useCookies(['auth_token']); // 쿠키 훅
  const [userInfo, setUserInfo] = useState({}); // 유저 정보
  const headerTitle = '마이페이지';
  const navigate = useNavigate(); // 대여중 및 대여신청 버튼 클릭시 이동하기 위함
  const [rentalList, setRentalList] = useState([]);
  const getUserInfo = async () => {
    const cookie = cookies.auth_token;
    const res = await userAPI.getUserInfo(cookie);
    setUserInfo(res.data);
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  // footer에서 활성화시킬 버튼 선택 (mypage 버튼 활성화)
  const [selectedButton, setSelectedButton] =
    useRecoilState(selectedButtonState);
  setSelectedButton('mypage');

  const getItemName = async (itemId) => {
    const res = await itemAPI.getItem(itemId);
    return res.data.product_name;
  };
  const fetchRentalList = async () => {
    const cookie = cookies.auth_token;
    const res = await rentalAPI.getUserRentalList(cookie);
    const rentalData = res.data;

    const updatedRentalList = await Promise.all(
      rentalData.map(async (item) => {
        const goodsName = await getItemName(item.item);

        let rentalState;
        if (item.approved === null) {
          rentalState = 2;
        } else if (item.approved !== null && item.returned === null) {
          rentalState = 1;
        } else if (item.returned !== null) {
          rentalState = 3;
        }
        return {
          ...item,
          rentalState: rentalState,
          goodsName: goodsName,
        };
      }),
    );
    const sortedList = updatedRentalList.reverse();
    setRentalList(sortedList);
  };
  function formatDateTime(isoString) {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더합니다.
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return isoString ? `${year}.${month}.${day} ${hours}:${minutes}` : '';
  }

  useEffect(() => {
    fetchRentalList();
  }, []);

  /*
    대여중: rentalState === 1
    대여신청: rentalState === 2
    반납완료: rentalState === 3
  */
  const modifyUserNumber = (userNumber) => {
    return userNumber?.substring(2, 4) + '학번';
  };
  return (
    <Layout headerTitle={headerTitle}>
      <MyPageContainer>
        <InfoContainer>
          {/* 아래 이름, 학번, 학부, 이메일은 나중에 받아오는 것으로 수정해야함 */}
          <PersonWrapper>
            {userInfo.name} ({userInfo.user_number})
          </PersonWrapper>
          <InfoWrapper>
            소프트웨어학부 {modifyUserNumber(userInfo.user_number)}
          </InfoWrapper>
          <InfoWrapper>{userInfo.email}</InfoWrapper>
        </InfoContainer>
        <HistoryContainer>
          <HistoryTitleContainer>
            <TitleIcon />
            대여내역
          </HistoryTitleContainer>
          <Divider />
          {rentalList.map((item, index) => (
            <Item
              key={index}
              goodsName={item.goodsName}
              rentalDate={formatDateTime(item.created)}
              returnDate={formatDateTime(item.returned)}
              rentalState={item.rentalState}
            />
          ))}
        </HistoryContainer>
      </MyPageContainer>
    </Layout>
  );
}

export default MyPage;
