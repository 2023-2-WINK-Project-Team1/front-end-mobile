import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import { useRecoilState } from 'recoil';
import { isAdminState, selectedButtonState } from '../recoil/recoil';
import Item from '../components/Item';
import { ReactComponent as TitleIcon } from '../assets/title.svg';
import { useNavigate } from 'react-router-dom';
import rentalAPI from '../api/rentalAPI';
import userAPI from '../api/userAPI';
import itemAPI from '../api/itemAPI';

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
  const adminCookie =
    'eyJhbGciOiJIUzI1NiJ9.NjVkZDk4YTE4NDNlZmY5NmYzMDc2MjIx.9WPIQUtoxUg9BOd6r0Qb8d3UUkov2bdsFTju1QJnA4E';

  const [isAdmin, setIsAdmin] = useRecoilState(isAdminState); // 관리자(true), 사용자(false)
  const [rentalList, setRentalList] = useState([]); // 대여내역
  // footer에서 활성화시킬 버튼 선택 부분 삭제 (나중에 전역 변수 수정해주는 방향)
  const [selectedButton, setSelectedButton] =
    useRecoilState(selectedButtonState);

  const navigate = useNavigate(); // 대여중 및 대여신청 버튼 클릭시 이동하기 위함

  const itemClick = (item) => {
    if (item.rentalState === 1) {
      navigate('/return-goods', { state: { item: item } });
    } else if (item.rentalState === 2) {
      navigate('/rental-goods', { state: { item: item } });
    }
  };

  const getUserName = async (userId) => {
    try {
      const res = await userAPI.getUserName(adminCookie, userId);
      const { name, user_number } = res.data;
      return user_number + ' ' + name;
    } catch (e) {
      return 'no user name';
    }
  };

  const getItemName = async (itemId) => {
    const res = await itemAPI.getItem(itemId);
    return res.data.product_name;
  };
  const fetchRentalList = async () => {
    const res = await rentalAPI.getAllRentalList(adminCookie);
    const rentalData = res.data;

    const updatedRentalList = await Promise.all(
      rentalData.map(async (item) => {
        const userName = await getUserName(item.create_user);
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
          userName: userName,
          rentalState: rentalState,
          goodsName: goodsName,
        };
      }),
    );
    const sortedList = updatedRentalList.reverse();
    setRentalList(sortedList);
  };

  useEffect(() => {
    fetchRentalList();
  }, []);

  /*
    대여중: rentalState === 1
    대여신청: rentalState === 2
    반납완료: rentalState === 3
  */

  return (
    <Layout headerProps={headerProps} isAdmin={isAdmin}>
      <MyPageContainer>
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
              rentalDate={item.created}
              returnDate={item.returned}
              rentalState={item.rentalState}
              user={item.userName}
              onClick={() => itemClick(item)}
            />
          ))}
        </HistoryContainer>
      </MyPageContainer>
    </Layout>
  );
}

export default AdminMain;
