import React from 'react';
import styled from 'styled-components';

let userName;
let goodsName;
let managerName;
let type;

type == 4;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: ;
  gap: -1px;
  margin-top: 56px;
`;

const StyledBox = styled.div`
  position: relative;
  width: 360px;
  height: 64px;
  border: 1px solid #d9d9d9;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0px;
  padding: 0 10px;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-right: 10px;
  margin-left: ${(props) => props.imageMarginLeft || '0'};
  line-height: 1;
  width: 20px;
  height: 20px;
`;

const Title = styled.p`
  font-size: ${(props) => props.fontSize || '12px'};
  color: #505050;
  flex: 1;
  //margin-left: -150px;
  //text-align: center;
`;

const Content = styled.p`
  font-size: ${(props) => props.fontSize || '10px'};
  color: #505050;
  text-align: center;
`;

function Main() {
  const imageMarginLeft = '12px';

  if (type == 1) {
    return (
      <MainContainer>
        <BoxContainer>
          <StyledBox>
            <Img src="/images/bell.png" imageMarginLeft={imageMarginLeft} />
            <Title>대여 신청</Title>
            <Content>
              userName 님이 goodsName 물품에 대해 대여 신청을 하였습니다.
            </Content>
          </StyledBox>
        </BoxContainer>
      </MainContainer>
    );
  } else if (type == 2) {
    return (
      <MainContainer>
        <BoxContainer>
          <StyledBox>
            <Img src="/images/bell.png" imageMarginLeft={imageMarginLeft} />
            <Title>대여 신청 처리</Title>
            <Content>
              managerName 님이 userName 님의 물품 대여 신청을 처리하였습니다.
            </Content>
          </StyledBox>
        </BoxContainer>
      </MainContainer>
    );
  } else if (type == 3) {
    return (
      <MainContainer>
        <BoxContainer>
          <StyledBox>
            <Img src="/images/edit.png" imageMarginLeft={imageMarginLeft} />
            <Title>대여 물품 정보 변경</Title>
            <Content>
              managerName 님이 goods 물품 관련 정보를 수정하였습니다.
            </Content>
          </StyledBox>
        </BoxContainer>
      </MainContainer>
    );
  } else if (type == 4) {
    return (
      <MainContainer>
        <BoxContainer>
          <StyledBox>
            <Img src="/images/bell.png" imageMarginLeft={imageMarginLeft} />
            <Title>대여 신청 취소</Title>
            <Content>userName 님이 물품 대여 신청을 취소하였습니다.</Content>
          </StyledBox>
        </BoxContainer>
      </MainContainer>
    );
  }
}

export default Main;
