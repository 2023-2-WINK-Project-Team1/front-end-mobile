import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import bell from '../../src/assets/Settings/bell.svg';
import people from '../../src/assets/Settings/people.svg';
import onRadio from '../../src/assets/Settings/radio.svg';
import arrow from '../../src/assets/Settings/arrow.svg';
import questionmark from '../../src/assets/Settings/questionmark.svg';
import offRadio from '../../src/assets/Settings/offRadio.svg';
import { isAdminState, isAlarmOnState } from '../recoil/recoil';
import Layout from '../components/layout/Layout';
import accountAPI from '../api/accountAPI';
import userAPI from '../api/userAPI';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가

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

function Setting() {
  const [cookies, setCookies, removeCookie] = useCookies(['auth_token']); // 쿠키 훅
  const [isAlarmOn, setIsAlarmOn] = useRecoilState(isAlarmOnState);
  const [adminState, setAdminState] = useRecoilState(isAdminState);
  const adminCookie =
    'eyJhbGciOiJIUzI1NiJ9.NjVkZDk4YTE4NDNlZmY5NmYzMDc2MjIx.9WPIQUtoxUg9BOd6r0Qb8d3UUkov2bdsFTju1QJnA4E';
  const navigate = useNavigate();
  // isRadioOn이 true이면 alarm 설정됨.
  const RadioClick = () => {
    setIsAlarmOn(!isAlarmOn);
  };
  const headerTitle = '설정';
  const logout = async () => {
    const cookie = cookies.auth_token;
    console.log('cookie : ', cookie);
    try {
      const res = await accountAPI.logout(cookie);
      console.log('logout res : ', res);
      removeCookie('auth_token'); // 쿠키를 삭제
      navigate('/sign-in'); // 로그인 페이지로 이동
    } catch (e) {
      console.log('logout error : ', e);
      alert('로그아웃에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  };
  const changeAdminMode = async () => {
    const cookie = cookies.auth_token;
    console.log('gmlgml');
    try {
      const res = await userAPI.getUserInfo(adminCookie);
      console.log('getUserInfo res : ', res);
      setAdminState(res.data.is_manager);
      navigate('/admin-main');
    } catch (e) {
      alert('관리자로 인증된 사용자가 아닙니다.');
      console.log('getUserInfo error : ', e);
    }
  };

  // alarm on/off를 RadioClick으로 제어
  const appInfoClick = () => {
    navigate('/app-info');
  };
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

            <BoxComponent onClick={appInfoClick}>
              <MiniContainer>
                <img src={questionmark} />
                <Text>정보</Text>
              </MiniContainer>
              <img src={arrow} />
            </BoxComponent>

            <BoxComponent onClick={() => changeAdminMode()}>
              <MiniContainer>
                <img src={people} />
                <Text>관리자 모드</Text>
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

export default Setting;
