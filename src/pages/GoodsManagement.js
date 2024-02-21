import React from 'react';
import { RecoilRoot } from 'recoil';
import styled from "styled-components";
import defaultImage from "../assets/defaultImage.svg";
import Button from "../components/Button";
import { useRecoilState } from 'recoil';
import { isAlarmOnState, isAdminState } from '../recoil/recoil';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import {useNavigate} from 'react-router-dom';
import { ReactComponent as PlusIcon } from './../assets/plus.svg';


const ListContainer = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  box-sizing: border-box;
  padding-bottom: 64px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap:50px;
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #D8D8D8;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  gap: 8px; 
  margin-top: 22px;
`;

const Remaining = styled.div`
  color: #9C9C9C;
  font-size: 12px;
  font-weight: 500;
`;

const GoodsName = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const ItemImage = styled.img`
  width: 48px; /* Adjust the width of the image as needed */
  height: 48px; /* Adjust the height of the image as needed */
`;

const ButtonWrapper = styled.div`
    position: sticky;
    left: 408px;
    bottom: 12px;
    
`;

const FloatingButton = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.white};
    border: 2px solid ${(props) => props.theme.primary};
    box-shadow: 3px 3px 5px gray;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const dummyData = [
  { imgSrc: defaultImage, goodsName: '물품 1', state: 0, remaining: 5 },
  { imgSrc: defaultImage, goodsName: '물품 2', state: 1, remaining: 5 },
  { imgSrc: defaultImage, goodsName: '물품 3', state: 2, remaining: 5 },
  { imgSrc: defaultImage, goodsName: '물품 3', state: 2, remaining: 5 },
  { imgSrc: defaultImage, goodsName: '물품 3', state: 2, remaining: 5 },
  { imgSrc: defaultImage, goodsName: '물품 3', state: 2, remaining: 5 },
  { imgSrc: defaultImage, goodsName: '물품 3', state: 2, remaining: 5 },
  { imgSrc: defaultImage, goodsName: '물품 3', state: 2, remaining: 5 },
];

function GoodsManagement() {

  const [isAdmin, setIsAdmin] = useRecoilState(isAdminState); // 관리자(true), 사용자(false)
  const navigate = useNavigate();

  const managementClick = () => {
      navigate('/'); // 재고 수정 페이지로 이동 (현재 재고수정페이지가 없으므로 메인으로 이동)
  };

  const floatingButtonClick = () => {
    navigate('/goods-registration');
  }

  return (
    <>
      <Header title={'물품 관리 및 등록'} ></Header>
      <ListContainer>
        {dummyData.map((item, index) => (
          <ListItem key={index}>
            <ItemImage src={item.imgSrc} alt={defaultImage} />
            <GoodsName>{item.goodsName}</GoodsName>
            <ButtonContainer>
              <Button children={'물품 관리'} size="Medium" onClick={managementClick}></Button>
              <Remaining>남은 수량: {item.remaining}</Remaining>
            </ButtonContainer>
          </ListItem>
        ))}
        <ButtonWrapper><FloatingButton onClick={floatingButtonClick}><PlusIcon /></FloatingButton></ButtonWrapper>
      </ListContainer>
      <Footer></Footer>
    </>
  );
}

export default GoodsManagement;
