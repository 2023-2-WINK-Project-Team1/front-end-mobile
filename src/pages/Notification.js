import styled from 'styled-components';
import NotiItem from '../components/NotiItem';
import Layout from '../components/layout/Layout';
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start; //화면 사이즈가 바뀔 경우에도 일정하게 정렬
  box-sizing: border-box;
  color: var(--light-gray-color);
`;

function Notification() {
  const headerTitle = '알림';
  return (
    <Layout headerTitle={headerTitle}>
      <MainContainer>
        <NotiItem type={'Request'} />
        <NotiItem type={'RequestApprove'} />
        <NotiItem type={'InfoFix'} />
        <NotiItem type={'RequestDenial'} />
      </MainContainer>
    </Layout>
  );
}

export default Notification;
