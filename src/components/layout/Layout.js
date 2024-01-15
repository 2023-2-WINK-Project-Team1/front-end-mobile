// Layout 컴포넌트(Header, Footer)
// 사용법: import Layout from '../components/layout/Layout'

import Header from './Header';
import Footer from './Footer';

/* 사용할 props 정리
    headerProps: 해당 페이지의 제목(title)
    children: 안에 들어갈 컨텐츠들
    */
function Layout({ headerProps, children }) {
  return (
    <div>
      {/*...을 쓰면 객체내의 모든 속성이 해당 컴포넌트의 props로 전달됨*/}
      <Header {...headerProps} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
