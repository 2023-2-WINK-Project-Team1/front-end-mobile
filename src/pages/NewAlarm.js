import styled from 'styled-components';
//import iconpassword from '../../src/assets/iconpassword1.svg';
import { useEffect, useState } from 'react';

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  justify-content: flex-start;
  align-self: center;
  border: 1px solid;
  box-sizing: border-box;
  color: #d9d9d9;
`;

const TextWrapper = styled.div`
  display: flex;
  font-size: 14px;
  //flex-direction: column;
  color: black;
  > p {
    margin-top: 0; /* 초기화 */
  }

  > p + p {
    margin-top: 10px; /* 첫 번째 p 요소 이후의 p 요소에만 margin-top 적용 */
  }
  > p:first-child {
    font-size: 12px;
    font-weight: bold;
  }

  > p:last-child {
    font-size: 10px;
  }
`;

//아이콘을 따로 div 안에 보관하자. 그리고, padding으로 공간을 띄우자.
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

function StringAlarmRender({ type }) {
  console.log('type : ', type);
  const [titleText, setTitleText] = useState('');
  const [resultText, setResultText] = useState('');
  const [imagePath, setImagePath] = useState('');
  const userName = 'gun';
  const goodsName = 'gugu';

  useEffect(() => {
    switch (type) {
      case 'Request':
        setTitleText('대여 신청');
        setResultText(
          `${userName} 님이 ${goodsName} 물품에 대해 대여 신청을 하였습니다.`,
        );
        setImagePath('/images/bell.png');
        break;

      case 'RequestApprove':
        setTitleText('대여 신청 승인');
        setResultText(
          `${userName} 님이 ${goodsName} 물품에 대해 대여 신청을 승인하였습니다.`,
        );
        setImagePath('/images/bell.png');
        break;

      case 'InfoFix':
        setTitleText('정보 수정');
        setResultText(
          `${userName} 님이 ${goodsName} 물품 관련 정보를 수정하였습니다.`,
        );
        setImagePath('/images/edit.png');
        break;

      case 'RequestDenial':
        setTitleText('대여 신청 거절');
        setResultText(
          `${userName} 님이 ${goodsName} 물품에 대해 대여 신청을 거절하였습니다.`,
        );
        setImagePath('/images/bell.png');
        break;

      default:
        break;
    }
  }, [type]);

  return (
    <MainContainer>
      <IconWrapper>
        <img src={imagePath} />
      </IconWrapper>
      <TextWrapper>
        <p>{titleText}</p>
        <p>{resultText}</p>
      </TextWrapper>
    </MainContainer>
  );
}

export default StringAlarmRender;
