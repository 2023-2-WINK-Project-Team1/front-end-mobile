import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import { useRecoilState } from 'recoil';
import { isAdminState } from '../recoil/recoil';
import Item from '../components/Item';
import { ReactComponent as TitleIcon } from '../assets/title.svg';
import { selectedButtonState } from '../recoil/recoil';
import userAPI from '../api/userAPI';
import { useCookies } from 'react-cookie';

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
  background-color: ${(props) => props.theme.primary};
  padding: 36px 0 0 20px;
  box-sizing: border-box;
`;

const PersonWrapper = styled.div`
  color: ${(props) => props.theme.white};
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 12px;
`;

const InfoWrapper = styled.div`
  color: ${(props) => props.theme.white};
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
  color: ${(props) => props.theme.black};
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 12px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.black};
`;

function MyPage() {
  const [cookies, setCookies, removeCookie] = useCookies(['auth_token']); // 쿠키 훅
  const [userInfo, setUserInfo] = useState({}); // 유저 정보
  const headerProps = {
    // header에 들어갈 페이지 제목은 여기서 수정
    title: '마이페이지',
  };

  const getUserInfo = async () => {
    const cookie = cookies.auth_token;
    const res = await userAPI.getUserInfo(cookie);
    setUserInfo(res.data);
    console.log('getUserInfo res : ', res);
  };
  useEffect(() => {
    getUserInfo();
    console.log('userInfo : ', userInfo);
  }, []);

  const [isAdmin, setIsAdmin] = useRecoilState(isAdminState); // 관리자(true), 사용자(false)

  // footer에서 활성화시킬 버튼 선택 (mypage 버튼 활성화)
  const [selectedButton, setSelectedButton] =
    useRecoilState(selectedButtonState);
  setSelectedButton('mypage');

  /*
    대여중: rentalState === 1
    대여신청: rentalState === 2
    반납완료: rentalState === 3
  */
  const dummyData = [
    {
      goodsName: '고데기',
      rentalDate: '2023.11.13 12:41',
      returnDate: '-',
      rentalState: 1,
    },
    {
      goodsName: '인공눈물',
      rentalDate: '2023.11.13 12:41',
      returnDate: '-',
      rentalState: 2,
    },
    {
      goodsName: '우산',
      rentalDate: '2023.11.13 12:41',
      returnDate: '2023.11.14 10:12',
      rentalState: 3,
    },
  ];
  const modifyUserNumber = (userNumber) => {
    return userNumber?.substring(2, 4) + '학번';
  };
  return (
    <Layout headerProps={headerProps} isAdmin={isAdmin}>
      <MyPageContainer>
        <InfoContainer>
          {/* 아래 이름, 학번, 학부, 이메일은 나중에 받아오는 것으로 수정해야함 */}
          <PersonWrapper onClick={() => console.log('userInfo : ', userInfo)}>
            {userInfo.name} ({userInfo.user_number})
          </PersonWrapper>
          <InfoWrapper>
            {/* Todo : 학번 잘라서 소속 구분 */}
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
          {dummyData.map((item, index) => (
            <Item
              key={index}
              goodsName={item.goodsName}
              rentalDate={item.rentalDate}
              returnDate={item.returnDate}
              rentalState={item.rentalState}
            />
          ))}
        </HistoryContainer>
      </MyPageContainer>
    </Layout>
  );
}

export default MyPage;
