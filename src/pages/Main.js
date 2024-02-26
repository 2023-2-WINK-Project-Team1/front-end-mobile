import Layout from '../components/layout/Layout';
import { useRecoilState } from 'recoil';
import { isAdminState } from '../recoil/recoil';

function Main() {
  const headerProps = {
    // header에 들어갈 페이지 제목은 여기서 수정
    title: '물품 대여',
  };

  const [isAdmin, setIsAdmin] = useRecoilState(isAdminState); // 관리자(true), 사용자(false)

  // 특정 값으로 isAdmin 설정하는 함수
  const setAdminStatus = (value) => {
    setIsAdmin(value);
  };

  // 여기서 사용자/관리자 설정 가능
  setAdminStatus(false);

  return (
    <div>
      {/*<h1>1팀 화이팅 ~!</h1>*/}
      <Layout headerProps={headerProps} isAdmin={isAdmin} />
    </div>
  );
}

export default Main;



