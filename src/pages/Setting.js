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
  align-items: center;
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
  padding: 0 10px; /* Added padding for the arrow */

  .arrow {
    width: 20px; /* Adjust arrow width as needed */
    height: 20px; /* Adjust arrow height as needed */
  }
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-right: 10px;
`;

const Text = styled.p`
  text-align: center;
  font-size: ${(props) => props.fontSize || '14px'};
  color: #505050;
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
            alt="알림"
            style={{
              marginLeft: imageMarginLeft,
              lineHeight: '2',
            }}
          />
          <Text>알림</Text>
          <img className="arrow" src="/images/arrow.svg" alt="Arrow" />
        </StyledBox>

        <StyledBox>
          <Img
            src="/images/questionmark.png"
            alt="정보"
            style={{
              marginLeft: imageMarginLeft,
              lineHeight: '1',
            }}
          />
          <Text>정보</Text>
          <img className="arrow" src="/images/arrow.svg" alt="Arrow" />
        </StyledBox>

        <StyledBox>
          <Img
            src="/images/people.png"
            alt="사람"
            style={{
              marginLeft: imageMarginLeft,
              lineHeight: '1',
            }}
          />
          <Text>사용자 모드</Text>
          <img className="arrow" src="/images/arrow.svg" alt="Arrow" />
        </StyledBox>
      </BoxContainer>

      <LogoutBox>
        <Text fontSize="16px">로그아웃</Text>
      </LogoutBox>
    </MainContainer>
  );
}

export default Main;
