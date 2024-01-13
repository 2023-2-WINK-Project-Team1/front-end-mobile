import React from 'react';
import styled from 'styled-components';
import bell from '../../src/assets/Settings/bell.svg';

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 360px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  justify-content: space-between;
  padding-left: 33px;
  padding-right: 33px;
  padding-top: 102px;
  box-sizing: border-box;
`;

const MiniContainer = styled.div`
  display: flex;
  align-items: center;
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

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-right: 10px;
  margin-left: 12px;
  width: 16px;
  height: 16px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #505050;
  flex: 1;
`;

const LogOutContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogOutText = styled.p`
  font-size: 16px;
  color: #505050;
  text-align: center;
`;

const LogOutBox = styled.button`
  width: 100%;
  border: 1px solid #005950;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Main() {
  return (
    <MainContainer>
      <BoxContainer>
        <BoxComponent>
          <MiniContainer>
            <Img src="/images/bell.png" />
            <Text>알림</Text>
          </MiniContainer>
          <img className="arrow" src="/images/radio.svg" alt="Arrow" />
        </BoxComponent>

        <BoxComponent>
          <MiniContainer>
            <Img src="/images/questionmark.png" />
            <Text>정보</Text>
          </MiniContainer>
          <Img src="/images/arrow.png" />
        </BoxComponent>

        <BoxComponent>
          <MiniContainer>
            <Img src="/images/people.png" />
            <Text>사용자 모드</Text>
          </MiniContainer>
          <Img src="/images/arrow.png" />
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

export default Main;
