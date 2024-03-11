import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import Time from '../components/input/Time';
import Button from '../components/Button';
import { ReactComponent as ImageIcon } from '../assets/image.svg';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import rentalAPI from '../api/rentalAPI';
import Count from '../components/input/Count';

const RentalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 56px;
  height: 100%;
  padding: 28px 32px;
  box-sizing: border-box;
`;

const ImageBox = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: var(--light-gray-color);
  cursor: pointer;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 28px;
  gap: 16px;
`;

const Text = styled.div`
  color: var(--black-color);
  font-size: 20px;
  font-weight: 700;
`;

function UserRental() {
  const headerTitle = '대여 신청';

  const userCookie =
    'eyJhbGciOiJIUzI1NiJ9.NjVkZDk3Y2Y3NWFlOWQzYmIwZTQwZGY5.oQxBqYgZ5LQphz_omqlO6w77we3_0mHj1SJ6xarqUeA';
  const [count, setCount] = useState('');
  const handleBase64 = (byteArray) => {
    const byteCharacters = byteArray.reduce(
      (data, byte) => data + String.fromCharCode(byte),
      '',
    );
    const base64String = btoa(byteCharacters);
    return `data:image/jpeg;base64,${base64String}`;
  };

  const location = useLocation();
  const { item } = location.state || {};

  const navigate = useNavigate();

  // 대여신청 버튼을 클릭하였을 때
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const requestRental = async (count) => {
    // const cookie = cookies.auth_token;
    const rentalData = {
      item_id: item._id,
      count: count,
    };
    const res = await rentalAPI.requestRental(userCookie, rentalData);
    if (res.status !== 200) {
      Swal.fire({
        title: '잠시 후 다시 시도해주세요.',
        icon: 'error',
        confirmButtonColor: 'var(--primary-color)',
        confirmButtonText: '확인',
      });
      setIsButtonDisabled(false);
      return;
    } else {
      Swal.fire({
        title: '대여 신청이 완료되었습니다.',
        icon: 'success',
        confirmButtonColor: 'var(--primary-color)',
        confirmButtonText: '확인',
      }).then(() => {
        navigate('/main');
      });
    }
  };

  const clickRentalButton = () => {
    setIsButtonDisabled(true); // 버튼 클릭하면 disabled 되게

    Swal.fire({
      title: '대여를 신청하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--primary-color)',
      cancelButtonColor: 'var(--red-color)',
      confirmButtonText: '신청',
      cancelButtonText: '취소',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        if (count === '' || count === 0) {
          Swal.fire({
            title: '대여 수량을 입력해주세요.',
            icon: 'error',
            confirmButtonColor: 'var(--primary-color)',
            confirmButtonText: '확인',
          });
          setIsButtonDisabled(false);
          return;
        } else {
          requestRental(count);
        }
      } else {
        setIsButtonDisabled(false);
      }
    });
  };

  return (
    <Layout headerTitle={headerTitle}>
      <RentalContainer>
        <ImageContainer>
          <ImageBox>
            {item ? (
              <Image src={handleBase64(item.image.data)} alt="Uploaded" />
            ) : (
              <ImageIcon />
            )}
          </ImageBox>
          <Text>{item.product_name}</Text>
        </ImageContainer>
        <InfoContainer>
          <Text>대여 정보</Text>
          <Count value={count} onChange={setCount} />
        </InfoContainer>
        <Button
          onClick={clickRentalButton}
          disabled={isButtonDisabled}
          size="Large"
          cancel={false}
        >
          대여 신청
        </Button>
      </RentalContainer>
    </Layout>
  );
}

export default UserRental;
