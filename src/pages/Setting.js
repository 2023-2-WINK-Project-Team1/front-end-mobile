import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: ;
  gap: 10px;
  margin-top: 102px;
`;

const StyledBox = styled.div`
  position: relative;
  width: 294px;
  height: 54px;
  border: 1px solid #005950;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 10px;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-right: 10px;
`;

const Text = styled.p`
  font-size: ${(props) => props.fontSize || '14px'};
  color: #505050;
  flex: 1;
  //margin-left: -150px;
  //text-align: center;
`;

const LogOutText = styled.p`
  font-size: ${(props) => props.fontSize || '14px'};
  color: #505050;
  text-align: center;
`;

const LogoutBox = styled.div`
  position: relative;
  width: 273px;
  height: 34px;
  border: 1px solid #005950;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 407px;
`;

function Main() {
  const imageMarginLeft = '12px';

  return (
    <MainContainer>
      <BoxContainer>
        <StyledBox>
          <Img
            src="/images/bell.png"
            style={{
              marginLeft: imageMarginLeft,
              lineHeight: '1',
              width: '16px',
              height: '16px',
            }}
          />
          <Text>알림</Text>
          <img className="arrow" src="/images/radio.svg" alt="Arrow" />
        </StyledBox>

        <StyledBox>
          <Img
            src="/images/questionmark.png"
            style={{
              marginLeft: imageMarginLeft,
              lineHeight: '1',
              width: '16px',
              height: '16px',
            }}
          />
          <Text>정보</Text>
          <img className="arrow" src="/images/arrow.png" alt="Arrow" />
        </StyledBox>

        <StyledBox>
          <Img
            src="/images/people.png"
            style={{
              marginLeft: imageMarginLeft,
              lineHeight: '1',
              width: '16px',
              height: '16px',
            }}
          />
          <Text>사용자 모드</Text>
          <img className="arrow" src="/images/arrow.png" alt="Arrow" />
        </StyledBox>
      </BoxContainer>

      <LogoutBox>
        <LogOutText fontSize="16px">로그아웃</LogOutText>
      </LogoutBox>
    </MainContainer>
  );
}

export default Main;
