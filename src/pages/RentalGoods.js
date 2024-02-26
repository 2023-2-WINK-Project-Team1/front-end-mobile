import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import defaultImage from '../assets/defaultImage.svg';
import Button from '../components/Button';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
  gap: 28px;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  gap: 20px;
  > div {
    font-size: 20px;
    font-weight: bold;
  }
`;

const ImageBox = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
`;

const dummyData = {
  imgSrc: defaultImage,
  label: '우산',
  user: '찬우',
  time: '23:00',
};
function RentalGoods() {
  const headerProps = {
    title: '물품 대여',
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const clickRentalButton = () => {
    setIsButtonDisabled(true);

    Swal.fire({
      title: '대여 신청을 처리하겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--primary-color)',
      cancelButtonColor: 'var(--red-color)',
      confirmButtonText: '완료',
      cancelButtonText: '취소',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setTimeout(() => {
          Swal.fire({
            title: '대여 신청 처리가 완료되었습니다.',
            icon: 'success',
            confirmButtonColor: 'var(--primary-color)',
            confirmButtonText: '확인',
          }).then(() => {
            setIsButtonDisabled(false);
            navigate('/');
          });
        }, 2000);
      } else {
        setIsButtonDisabled(false);
      }
    });
  };

  return (
    <Layout headerProps={headerProps}>
      <MyPageContainer>
        <ListContainer>
          <ImageBox>
            <Image src={dummyData.imgSrc} alt={defaultImage} />
          </ImageBox>
          <ListItem>
            <div>대여 물품: {dummyData.label}</div>
            <div>대여자: {dummyData.user}</div>
            <div>대여 시간: {dummyData.time}</div>
          </ListItem>
        </ListContainer>
        <Button
          onClick={clickRentalButton}
          disabled={isButtonDisabled}
          size="Large"
          cancel={false}
        >
          대여 완료 처리
        </Button>
      </MyPageContainer>
    </Layout>
  );
}

export default RentalGoods;
