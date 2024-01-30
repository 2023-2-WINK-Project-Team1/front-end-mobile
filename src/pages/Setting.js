import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import bell from '../../src/assets/Settings/bell.svg';
import people from '../../src/assets/Settings/people.svg';
import radio from '../../src/assets/Settings/radio.svg';
import arrow from '../../src/assets/Settings/arrow.svg';
import questionmark from '../../src/assets/Settings/questionmark.svg';
import offRadio from '../../src/assets/Settings/offradio.svg';

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 360px;
  padding-top: 102px;
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
  border: 1px solid #005950;
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
  color: #005950;
  text-align: center;
`;

const LogOutBox = styled.button`
  width: 100%;
  border: 1px solid #005950;
  border-radius: 5px;
  background-color: #ffffff;
`;

function Setting() {
  const [imagePath, setImagePath] = useState('');
  const [isRadioOn, setIsRadioOn] = useState(true);
  // isRadioOn이 true 이거나 false일 경우로 관리
  return (
    <MainContainer>
      <BoxContainer>
        <BoxComponent>
          <MiniContainer>
            <img src={bell} />
            <Text>알림</Text>
          </MiniContainer>
          <img src={isRadioOn ? radio : offRadio} />
        </BoxComponent>

        <BoxComponent>
          <MiniContainer>
            <img src={questionmark} />
            <Text>정보</Text>
          </MiniContainer>
          <img src={arrow} />
        </BoxComponent>

        <BoxComponent>
          <MiniContainer>
            <img src={people} />
            <Text>사용자 모드</Text>
          </MiniContainer>
          <img src={arrow} />
        </BoxComponent>
      </BoxContainer>
      <LogOutContainer>
        <LogOutBox>
          <LogOutText>로그아웃</LogOutText>
        </LogOutBox>
      </LogOutContainer>
    </MainContainer>
  );
}

export default Setting;
