import Layout from '../components/layout/Layout';
import { RecoilRoot } from 'recoil';

function Main() {
  const headerProps = {
    // header에 들어갈 페이지 제목은 여기서 수정
    title: '물품 대여',
  };

  const isAdmin = true; // 관리자(true), 사용자(false)

  return (
    <RecoilRoot>
      <div>
        {/*<h1>1팀 화이팅 ~!</h1>*/}
        <Layout headerProps={headerProps} isAdmin={false} />
      </div>
    </RecoilRoot>
  );
}

export default Main;
