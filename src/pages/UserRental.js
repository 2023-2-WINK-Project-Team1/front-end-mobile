import Layout from '../components/layout/Layout';
import { useRecoilState } from 'recoil';
import { isAdminState } from '../recoil/recoil';
import Time from '../components/input/Time';
import Button from '../components/Button';

function UserRental() {
  const headerProps = {
    // header에 들어갈 페이지 제목은 여기서 수정
    title: '대여 신청',
  };

  const [isAdmin, setIsAdmin] = useRecoilState(isAdminState); // 관리자(true), 사용자(false)

  // 특정 값으로 isAdmin 설정하는 함수
  const setAdminStatus = (value) => {
    setIsAdmin(value);
  };

  // user 대여 신청이므로 false
  setAdminStatus(false);

  return (
    <div>
      <Layout headerProps={headerProps} isAdmin={isAdmin} />
      <Button disabled={false} size="Large" cancel={false}>
        대여 신청
      </Button>
    </div>
  );
}

export default UserRental;
