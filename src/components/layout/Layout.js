// Layout 컴포넌트(Header, Footer)
// 사용법: import Layout from '../components/layout/Layout'
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Main = styled.main`
  flex: 1; // flex 속성을 활용하여 가용 공간을 채우도록 설정
`;
/* 사용할 props 정리
    headerProps: 해당 페이지의 제목(title)
    isAdmin: 관리자(true)인지 사용자(false)인지 구별하기 위함
    */
function Layout({ headerProps, isAdmin, children }) {
  return (
    <LayoutContainer>
      {/*...을 쓰면 객체내의 모든 속성이 해당 컴포넌트의 props로 전달됨*/}
      <Header {...headerProps} />
      <Main>{children}</Main>
      <Footer isAdmin={isAdmin} />
    </LayoutContainer>
  );
}

export default Layout;
