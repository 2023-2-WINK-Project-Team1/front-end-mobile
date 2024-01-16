import styled from 'styled-components';
import bell from '../../src/assets/Settings/bell.svg';
import edit from '../../src/assets/Settings/edit.svg';
import { useEffect, useState } from 'react';

const MainWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  padding-top: 12px;
  padding-bottom: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: black;
  font-weight: 600;
  gap: 10px;
`;

const AlarmTitle = styled.div`
  font-size: 12px;
`;

const AlarmContent = styled.div`
  font-size: 10px;
`;

function StringAlarmRender({ type }) {
  console.log('type : ', type);
  const [titleText, setTitleText] = useState('');
  const [resultText, setResultText] = useState('');
  const [imagePath, setImagePath] = useState('');
  const userName = 'gugu';
  const goodsName = 'gun';

  useEffect(() => {
    switch (type) {
      case 'Request':
        setTitleText('대여 신청');
        setResultText(
          `${userName} 님이 ${goodsName} 물품에 대해 대여 신청을 하였습니다.`,
        );
        setImagePath(bell);
        break;

      case 'RequestApprove':
        setTitleText('대여 신청 승인');
        setResultText(
          `${userName} 님이 ${goodsName} 물품에 대해 대여 신청을 승인하였습니다.`,
        );
        setImagePath(bell);
        break;

      case 'InfoFix':
        setTitleText('정보 수정');
        setResultText(
          `${userName} 님이 ${goodsName} 물품 관련 정보를 수정하였습니다.`,
        );
        setImagePath(edit);
        break;

      case 'RequestDenial':
        setTitleText('대여 신청 거절');
        setResultText(
          `${userName} 님이 ${goodsName} 물품에 대해 대여 신청을 거절하였습니다.`,
        );
        setImagePath(bell);
        break;

      default:
        break;
    }
  }, [type]);

  return (
    <MainWrapper>
      <img src={imagePath} />
      <TextWrapper>
        <AlarmTitle>{titleText}</AlarmTitle>
        <AlarmContent>{resultText}</AlarmContent>
      </TextWrapper>
    </MainWrapper>
  );
}

export default StringAlarmRender;
