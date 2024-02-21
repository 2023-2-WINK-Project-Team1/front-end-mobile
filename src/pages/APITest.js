import Layout from '../components/layout/Layout';
import styled from 'styled-components';
import accountAPI from '../api/accountAPI';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const APIButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffd600;
`;
function APITest() {
  const headerProps = {
    // header에 들어갈 페이지 제목은 여기서 수정
    title: '물품 대여',
  };
  const emailAuth = async () => {
    const data = {
      email: 'heegun4690@kookmin.ac.kr',
    };
    const res = await accountAPI.emailAuth(data);
    console.log('res : ', res);
  };

  return (
    <div>
      <Layout headerProps={headerProps}>
        {/*<h1>1팀 화이팅 ~!</h1>*/}
        <MainContainer>
          <ButtonContainer>
            <APIButton onClick={emailAuth}>1</APIButton>
            <APIButton>2</APIButton>
            <APIButton>3</APIButton>
            <APIButton>4</APIButton>
            <APIButton>5</APIButton>
          </ButtonContainer>
        </MainContainer>
      </Layout>
    </div>
  );
}

export default APITest;
