import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import defaultImage from '../assets/defaultImage.svg';
import Button from '../components/Button';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';
import itemAPI from '../api/itemAPI';
import rentalAPI from '../api/rentalAPI';

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
  const adminCookie =
    'eyJhbGciOiJIUzI1NiJ9.NjVkZDk4YTE4NDNlZmY5NmYzMDc2MjIx.9WPIQUtoxUg9BOd6r0Qb8d3UUkov2bdsFTju1QJnA4E';

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {}; // location.state가 존재하지 않는 경우를 대비한 기본값 설정
  const [imageSrc, setImageSrc] = useState(dummyData.imgSrc); // 이미지 소스 상태를 추가
  const extractTime = (datetimeString) => {
    const date = new Date(datetimeString);

    let hours = date.getHours();
    const minutes = date.getMinutes();

    const meridiem = hours < 12 ? '오전' : '오후';
    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${meridiem} ${formattedHours}:${formattedMinutes}`;
  };

  const getItemSrc = async (itemId) => {
    try {
      const res = await itemAPI.getItem('65ee9a7e05e76f241b39b678');
      return res.data.image.data;
    } catch (e) {
      return 'no item info';
    }
  };
  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const fetchImage = async () => {
    const itemSrc = await getItemSrc(item.item); // itemSrc가 비동기로 가져온 데이터이므로 await을 사용합니다.
    const base64Image = arrayBufferToBase64(itemSrc); // 가져온 데이터를 Base64로 변환합니다.
    setImageSrc(`data:image/jpeg;base64,${base64Image}`);
  };
  // 대여 승인 - 관리자
  const approveRental = async (rentalId) => {
    const cookie = adminCookie;
    const res = await rentalAPI.approveRental(cookie, rentalId);
    if (res.status === 200) {
      Swal.fire({
        title: '대여 신청이 승인되었습니다.',
        icon: 'success',
        confirmButtonColor: 'var(--primary-color)', // 이 부분은 전역 색상이 안써져서 매년 수정해야할 것 같음
        confirmButtonText: '확인',
      }).then(() => {
        setIsButtonDisabled(false);
        navigate('/admin-main');
      });
    } else {
      Swal.fire({
        title: '대여 신청 승인에 실패하였습니다.',
        icon: 'error',
        confirmButtonColor: 'var(--primary-color)', // 이 부분은 전역 색상이 안써져서 매년 수정해야할 것 같음
        confirmButtonText: '확인',
      });
    }
    console.log('approveRental res : ', res);
  };

  useEffect(() => {
    console.log('item : ', item);
    if (item && item.item) {
      fetchImage();
    }
  }, [item]);

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
        approveRental(item._id);
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
            <Image src={imageSrc} alt={defaultImage} />
          </ImageBox>
          <ListItem>
            <div>대여 물품: {item.goodsName}</div>
            <div>대여자: {item.userName}</div>
            <div>대여 시간: {extractTime(item.created)}</div>
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
