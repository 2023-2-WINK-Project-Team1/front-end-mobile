import styled from 'styled-components';
import NotiItem from '../components/NotiItem';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.div`
  color: var(--light-gray-color);
`;

function Notification() {
  const navigate = useNavigate(); // 대여중 및 대여신청 버튼 클릭시 이동하기 위함

  const backClick = () => {
    navigate(-1);
  };
  useEffect(() => {
    Swal.fire({
      title: '준비중입니다!',
      text: '조금만 기다려주세요!',
      icon: 'info',
      confirmButtonText: '확인',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(-1);
      }
    });
  });
  return <MainContainer></MainContainer>;
}

export default Notification;
