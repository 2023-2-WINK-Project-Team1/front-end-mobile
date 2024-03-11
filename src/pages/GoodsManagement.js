import React, { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import defaultImage from '../assets/defaultImage.svg';
import Button from '../components/Button';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as PlusIcon } from './../assets/plus.svg';
import itemAPI from '../api/itemAPI';

const ListContainer = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  box-sizing: border-box;
  padding: 0 20px 64px 20px;
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
  justify-content: space-between;
  gap: 50px;
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #d8d8d8;
  padding: 0 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 22px;
`;

const Remaining = styled.div`
  color: var(--gray-color);
  font-size: 12px;
  font-weight: 500;
`;

const GoodsName = styled.div`
  width: 100px;
  overflow: hidden;
  word-break: break-all;
  font-size: 20px;
  font-weight: 500;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
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
  background-color: var(--white-color);
  border: 2px solid var(--primary-color);
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
  const [itemList, setItemList] = useState([]); // [1]
  const getAllItemList = async () => {
    const res = await itemAPI.getAllItemList();
    console.log('getAllItemList res : ', res);
    setItemList(res.data);
  };
  const navigate = useNavigate();

  const managementClick = (item) => {
    navigate('/goods-modify', { state: { item: item } }); // 재고 수정 페이지로 이동 (현재 재고수정페이지가 없으므로 메인으로 이동)
  };

  const floatingButtonClick = () => {
    navigate('/goods-registration');
  };

  const handleBase64 = (byteArray) => {
    const byteCharacters = byteArray.reduce(
      (data, byte) => data + String.fromCharCode(byte),
      '',
    );
    const base64String = btoa(byteCharacters);
    return `data:image/jpeg;base64,${base64String}`;
  };

  useEffect(() => {
    getAllItemList();
  }, []);
  useEffect(() => {
    console.log('itemList : ', itemList);
  }, [itemList]);

  return (
    <>
      <Header title={'물품 관리 및 등록'}></Header>
      <ListContainer>
        {itemList.map((item, index) => (
          <ListItem key={index}>
            <ItemImage src={handleBase64(item.image.data)} alt={defaultImage} />
            <GoodsName>{item.product_name}</GoodsName>
            <ButtonContainer>
              <Button
                children={'물품 관리'}
                size="Medium"
                onClick={() => managementClick(item)}
              ></Button>
              <Remaining>남은 수량: {item.count}</Remaining>
            </ButtonContainer>
          </ListItem>
        ))}
        <ButtonWrapper>
          <FloatingButton onClick={floatingButtonClick}>
            <PlusIcon />
          </FloatingButton>
        </ButtonWrapper>
      </ListContainer>
      <Footer></Footer>
    </>
  );
}

export default GoodsManagement;
