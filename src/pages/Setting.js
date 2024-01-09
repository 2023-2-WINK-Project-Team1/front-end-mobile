import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 294px;
  height: 54px;
  border: 1px solid #005950;
  margin-bottom: 10px;

  &:nth-child(1) {
    top: 102px;
    left: 33px;
    .text-box {
      font-size: 14px;
      color: #505050;
    }
  }

  &:nth-child(2) {
    top: 186px;
    left: 33px;
    .text-box {
      font-size: 14px;
      color: #505050;
    }
  }

  &:nth-child(3) {
    top: 270px;
    left: 33px;
    .text-box {
      font-size: 14px;
      color: #505050;
    }
  }

  &:nth-child(4) {
    top: 677px;
    left: 43px;
    width: 273px;
    height: 34px;
    border-radius: 5px;
    .text-box {
      font-size: 16px;
      color: #505050;
      text-align: center;
    }
  }
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Text = styled.p`
  text-align: center;
`;

function Main() {
  const imageMarginLeft = '12px';

  return (
    <MainContainer className="main-container">
      <StyledBox>
        <Img
          src="/images/bell.png"
          alt="알림"
          style={{
            marginRight: '10px',
            marginLeft: imageMarginLeft,
            lineHeight: '2',
          }}
        />
        <Text className="text">알림</Text>
      </StyledBox>

      <StyledBox>
        <Img
          src="/images/questionmark.png"
          alt="정보"
          style={{
            marginRight: '10px',
            marginLeft: imageMarginLeft,
            lineHeight: '1',
          }}
        />
        <Text className="text">정보</Text>
      </StyledBox>

      <StyledBox>
        <Img
          src="/images/people.png"
          alt="사람"
          style={{
            marginRight: '10px',
            marginLeft: imageMarginLeft,
            lineHeight: '1',
          }}
        />
        <Text className="text">사용자 모드</Text>
      </StyledBox>

      <StyledBox>
        <Text
          className="text"
          style={{ fontSize: '16px', marginLeft: '20px', lineHeight: '1' }}
        >
          로그아웃
        </Text>
      </StyledBox>
    </MainContainer>
  );
}

export default Main;
