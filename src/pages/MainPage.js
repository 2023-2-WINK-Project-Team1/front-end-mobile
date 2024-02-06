import Layout from '../components/layout/Layout';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import xLogo from '../assets/xLogo.svg';
import connectLogoWhite from '../assets/connectLogoWhite.svg';
import winkLogo from '../assets/winkLogo.svg';
import defaultImage from '../assets/defaultImage.svg';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Container = styled.div`
  width: 100%;
  background-color: #005950;
  height: 200px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 500;
  font-size: 24px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;
`;

const WinkLogo = styled.img`
  width: 86px;
  height: 38px;
`;

const XLogo = styled.img`
  width: 28px;
  height: 28px;
  padding-left: 4px;
  padding-right: 16px;
`;

const ConnectLogoWhite = styled.img`
  width: 52px;
  height: 46px;
`;

const ListContainer = styled.div`
  width: 100%;
  height: calc(100vh - 256px);
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
  gap: 50px;
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #d8d8d8;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 22px;
`;

const Remaining = styled.div`
  color: #9c9c9c;
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

const stateList = ['대여하기', '신청취소', '반납하기'];

function MainPage() {
  const navigate = useNavigate();
  const headerProps = {
    title: '물품 대여',
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleRentalClick = (item) => {
    if (item.state === 0) {
      navigate('../user-rental');
    } else if (item.state === 1) {
      Swal.fire({
        title: '신청을 취소하시겠습니까?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#005950', // 이 부분은 전역 색상이 안써져서 매년 수정해야할 것 같음
        cancelButtonColor: '#D43434',
        confirmButtonText: '예',
        cancelButtonText: '아니요',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // '신청' 버튼을 누르면 2초 뒤에 확인창 뜸
          setTimeout(() => {
            Swal.fire({
              title: '취소 신청이 완료되었습니다.',
              icon: 'success',
              confirmButtonColor: '#005950', // 이 부분은 전역 색상이 안써져서 매년 수정해야할 것 같음
              confirmButtonText: '확인',
            }).then(() => {
              navigate('/');
            });
          }, 2000);
        } else {
          setIsButtonDisabled(false); // 아니요 버튼을 누르면 버튼이 다시 활성화 되도록
        }
      });
    } else if (item.state === 2) {
      Swal.fire({
        title: '반납을 신청하시겠습니까?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#005950', // 이 부분은 전역 색상이 안써져서 매년 수정해야할 것 같음
        cancelButtonColor: '#D43434',
        confirmButtonText: '예',
        cancelButtonText: '아니요',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // '신청' 버튼을 누르면 2초 뒤에 확인창 뜸
          setTimeout(() => {
            Swal.fire({
              title: '반납을 완료하였습니다.',
              icon: 'success',
              confirmButtonColor: '#005950', // 이 부분은 전역 색상이 안써져서 매년 수정해야할 것 같음
              confirmButtonText: '확인',
            }).then(() => {
              navigate('/');
            });
          }, 2000);
        } else {
          setIsButtonDisabled(false); // 아니요 버튼을 누르면 버튼이 다시 활성화 되도록
        }
      });
    }
  };

  return (
    <>
      <Container>
        <ImageContainer>
          <WinkLogo src={winkLogo} alt="Wink Logo" />
          <XLogo src={xLogo} alt="X Logo" />
          <ConnectLogoWhite src={connectLogoWhite} alt="Connect Logo White" />
        </ImageContainer>
        <TextContainer>
          <div>국민대학교 소프트웨어학부</div>
          <div>복지물품 대여 시스템</div>
        </TextContainer>
      </Container>

      <ListContainer>
        {dummyData.map((item, index) => (
          <ListItem key={index}>
            <ItemImage src={item.imgSrc} alt={defaultImage} />
            <GoodsName>{item.goodsName}</GoodsName>
            <ButtonContainer>
              <Button
                children={stateList[item.state]}
                size="Medium"
                cancel={item.state === 1}
                onClick={() => handleRentalClick(item)}
              ></Button>
              <Remaining>남은 수량: {item.remaining}</Remaining>
            </ButtonContainer>
          </ListItem>
        ))}
      </ListContainer>
    </>
  );
}

export default MainPage;
