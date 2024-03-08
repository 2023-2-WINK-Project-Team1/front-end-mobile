import React, { useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import { useRecoilState } from 'recoil';
import { isAdminState, selectedButtonState } from '../recoil/recoil';
import Item from '../components/Item';
import { ReactComponent as TitleIcon } from '../assets/title.svg';
import { useNavigate } from 'react-router-dom';

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
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

function AdminMain() {
  const headerProps = {
    // header에 들어갈 페이지 제목은 여기서 수정
    title: '관리자 화면',
  };

  const [isAdmin, setIsAdmin] = useRecoilState(isAdminState); // 관리자(true), 사용자(false)

  // footer에서 활성화시킬 버튼 선택 부분 삭제 (나중에 전역 변수 수정해주는 방향)
  const [selectedButton, setSelectedButton] =
    useRecoilState(selectedButtonState);

  const navigate = useNavigate(); // 대여중 및 대여신청 버튼 클릭시 이동하기 위함

  const itemClick = (item) => {
    // rentalState가 1(대여중) 또는 2(대여신청)일 때 클릭 시 다른 페이지로 이동
    if (item.rentalState === 1) {
      navigate('/return-goods'); // 반납처리 페이지로 이동
    } else if (item.rentalState === 2) {
      navigate('/rental-goods'); // 대여처리 페이지로 이동
    }
  };

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
      user: '20181574 곽희건',
    },
    {
      goodsName: '인공눈물',
      rentalDate: '2023.11.13 12:41',
      returnDate: '-',
      rentalState: 2,
      user: '20181574 곽희건',
    },
    {
      goodsName: '우산',
      rentalDate: '2023.11.13 12:41',
      returnDate: '2023.11.14 10:12',
      rentalState: 3,
      user: '20181574 곽희건',
    },
  ];

  return (
    <Layout headerProps={headerProps} isAdmin={isAdmin}>
      <MyPageContainer>
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
              user={item.user}
              onClick={() => itemClick(item)}
            />
          ))}
        </HistoryContainer>
      </MyPageContainer>
    </Layout>
  );
}

export default AdminMain;
