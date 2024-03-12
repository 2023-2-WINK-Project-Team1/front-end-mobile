// GoodsModify.js
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Name from '../components/input/Name';
import Count from '../components/input/Count';
import Button from '../components/Button';
import { ReactComponent as ImageIcon } from '../assets/image.svg';
import Swal from 'sweetalert2';
import itemAPI from '../api/itemAPI';
import { useCookies } from 'react-cookie';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 28px 32px 100px 32px;
  box-sizing: border-box;
  gap: 32px;
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
  margin-bottom: 46px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Input = styled.input`
  display: none; // 화면에 안보이게 하기 위함
`;

const GoodsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ReturnContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--black-color);
  font-size: 16px;
  font-weight: 600;
  padding-top: 32px;
  padding-bottom: 60px;
  gap: 16px;
`;

const CheckBox = styled.input`
  width: 16px;
  height: 16px;
`;

function GoodsRegistration() {
  const headerTitle = '물품 수정';
  const [cookies, setCookies, removeCookie] = useCookies(['auth_token']); // 쿠키 훅

  const location = useLocation();
  const { item } = location.state || {};

  const [productName, setProductName] = useState('');
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  // 대여신청 버튼을 클릭하였을 때
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleBase64 = (byteArray) => {
    const byteCharacters = byteArray.reduce(
      (data, byte) => data + String.fromCharCode(byte),
      '',
    );
    const base64String = btoa(byteCharacters);
    return `data:image/jpeg;base64,${base64String}`;
  };

  useEffect(() => {
    if (item) {
      setProductName(item.product_name);
      setCount(item.count);
    }
  }, [item]);

  const updateItem = async () => {
    const cookie = cookies.auth_token;

    const itemInfo = {
      product_name: productName,
      count: count,
    };
    const res = await itemAPI.updateItem(cookie, item._id, itemInfo);
    if (res.status === 200) {
      Swal.fire({
        title: '물품이 수정되었습니다.',
        icon: 'success',
        confirmButtonColor: 'var(--primary-color)',
        confirmButtonText: '확인',
      }).then(() => {
        navigate('/goods-management');
      });
    } else {
      Swal.fire({
        title: '물품 수정에 실패하였습니다.',
        icon: 'error',
        confirmButtonColor: 'var(--primary-color)',
        confirmButtonText: '확인',
      });
      setIsButtonDisabled(false); // 대여신청 취소 버튼을 누르면 버튼이 다시 활성화 되도록
    }
  };

  const clickRentalButton = () => {
    if (!productName || !count) {
      Swal.fire({
        title: '물품의 정보를 모두 입력해주세요.',
        icon: 'error',
        confirmButtonColor: 'var(--primary-color)',
        confirmButtonText: '확인',
      });
      return;
    }

    setIsButtonDisabled(true); // 버튼 클릭하면 disabled 되게

    Swal.fire({
      title: '물품을 등록하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--primary-color)',
      cancelButtonColor: 'var(--red-color)',
      confirmButtonText: '등록',
      cancelButtonText: '취소',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        updateItem();
      } else {
        setIsButtonDisabled(false); // 대여신청 취소 버튼을 누르면 버튼이 다시 활성화 되도록
      }
    });
  };

  return (
    <Layout headerTitle={headerTitle}>
      <RegisterContainer>
        <ImageContainer>
          <ImageBox>
            <Image src={handleBase64(item.image.data)} alt="Uploaded" />
          </ImageBox>
        </ImageContainer>
        <GoodsInfoContainer>
          <Name value={productName} onChange={setProductName} />
          <Count value={count} onChange={setCount} />
        </GoodsInfoContainer>
        <Button
          onClick={clickRentalButton}
          disabled={isButtonDisabled}
          size="Large"
          cancel={false}
        >
          물품 수정
        </Button>
      </RegisterContainer>
    </Layout>
  );
}

export default GoodsRegistration;
