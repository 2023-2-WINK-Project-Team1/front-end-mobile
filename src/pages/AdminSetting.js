import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import bell from '../../src/assets/Settings/bell.svg';
import people from '../../src/assets/Settings/people.svg';
import onRadio from '../../src/assets/Settings/radio.svg';
import arrow from '../../src/assets/Settings/arrow.svg';
import questionmark from '../../src/assets/Settings/questionmark.svg';
import offRadio from '../../src/assets/Settings/offRadio.svg';
import { isAlarmOnState, isAdminState } from '../recoil/recoil';
import Layout from '../components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import accountAPI from '../api/accountAPI';
import Swal from 'sweetalert2';

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 46px 0;
  background: #fff;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  justify-content: space-between;
  padding-left: 32px;
  padding-right: 32px;
  box-sizing: border-box;
`;

const MiniContainer = styled.div`
  display: flex;
  padding-left: 12px;
  gap: 20px;
`;

const BoxComponent = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--primary-color);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 12px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #505050;
  flex: 1;
`;

const LogOutContainer = styled.div`
  width: 70%;
  justify-content: center;
  align-items: center;
`;

const LogOutText = styled.p`
  font-size: 16px;
  color: var(--primary-color);
  text-align: center;
`;

const LogOutBox = styled.button`
  width: 100%;
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  background-color: var(--white-color);
`;

function AdminSetting() {
  const [cookies, setCookies, removeCookie] = useCookies(['auth_token']); // 쿠키 훅
  const [isAlarmOn, setIsAlarmOn] = useRecoilState(isAlarmOnState);
  const navigate = useNavigate(); // 대여중 및 대여신청 버튼 클릭시 이동하기 위함

  // isRadioOn이 true이면 alarm 설정됨.
  const RadioClick = () => {
    setIsAlarmOn(!isAlarmOn);
  };
  const headerTitle = '설정';

  const [isAdmin, setIsAdmin] = useRecoilState(isAdminState); // 관리자(true), 사용자(false)

  const changeUserMode = () => {
    setIsAdmin(false);
    navigate('/main');
  };

  const logout = async () => {
    Swal.fire({
      title: '로그아웃 하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--primary-color)',
      cancelButtonColor: 'var(--red-color)',
      confirmButtonText: '로그아웃',
      cancelButtonText: '취소',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await accountAPI.logout(cookies.auth_token);
          if (res.status === 200) {
            removeCookie('auth_token'); // 쿠키 삭제
            navigate('/sign-in'); // 로그인 페이지로 리다이렉션
          } else {
            // 서버에서 로그아웃 처리 실패
            throw new Error('로그아웃 처리 실패');
          }
        } catch (e) {
          Swal.fire({
            title: '로그아웃에 실패했습니다. 잠시 후 다시 시도해주세요.',
            icon: 'error',
            confirmButtonColor: 'var(--primary-color)',
            confirmButtonText: '확인',
          });
        }
      }
    });
  };

  // alarm on/off를 RadioClick으로 제어
  return (
    <div>
      <Layout headerTitle={headerTitle}>
        <MainContainer>
          <BoxContainer>
            <BoxComponent>
              <MiniContainer>
                <img src={bell} />
                <Text>알림</Text>
              </MiniContainer>
              <img src={isAlarmOn ? onRadio : offRadio} onClick={RadioClick} />
            </BoxComponent>

            <BoxComponent>
              <MiniContainer>
                <img src={questionmark} />
                <Text>정보</Text>
              </MiniContainer>
              <img src={arrow} />
            </BoxComponent>

            <BoxComponent onClick={() => changeUserMode()}>
              <MiniContainer>
                <img src={people} />
                <Text>사용자 모드</Text>
              </MiniContainer>
              <img src={arrow} />
            </BoxComponent>
          </BoxContainer>
          <LogOutContainer>
            <LogOutBox>
              <LogOutText onClick={() => logout()}>로그아웃</LogOutText>
            </LogOutBox>
          </LogOutContainer>
        </MainContainer>
      </Layout>
    </div>
  );
}

export default AdminSetting;
