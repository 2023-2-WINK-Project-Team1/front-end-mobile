import styled from 'styled-components';
import bell from '../../src/assets/Settings/bell.svg';
import edit from '../../src/assets/Settings/edit.svg';
import { useEffect, useState } from 'react';

const MainWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 0px 16px 20px;
  border-bottom: 1px solid #d9d9d9;
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

function NotiItem({ type }) {
  console.log('type : ', type);
  const [titleText, setTitleText] = useState('');
  const [resultText, setResultText] = useState('');
  const [imagePath, setImagePath] = useState('');
  const userName = 'gugu';
  const goodsName = 'gun';
  const adminName = 'admin';

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
          `${adminName} 님이 ${userName} 님의 물품 대여 신청을 처리하였습니다.`,
        ); /*관리자명 표기*/
        setImagePath(bell);
        break;

      case 'InfoFix':
        setTitleText('정보 수정');
        setResultText(
          `${adminName} 님이 ${goodsName} 물품 관련 정보를 수정하였습니다.`,
        );
        setImagePath(edit);
        break;

      case 'RequestDenial':
        setTitleText('대여 신청 거절');
        setResultText(`${userName} 님이 물품 대여 신청을 취소하였습니다.`);
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

export default NotiItem;
