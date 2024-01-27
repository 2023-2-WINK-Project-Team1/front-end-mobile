import styled from 'styled-components';
import NotiItem from '../components/NotiItem';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start; //화면 사이즈가 바뀔 경우에도 일정하게 정렬
  box-sizing: border-box;
  color: #d9d9d9;
`;

function Notification() {
  return (
    <MainContainer>
      <NotiItem type={'Request'} />
      <NotiItem type={'RequestApprove'} />
      <NotiItem type={'InfoFix'} />
      <NotiItem type={'RequestDenial'} />
    </MainContainer>
  );
}

export default Notification;
