import styled from 'styled-components';
import Alarm from '../components/Alarm';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start; //화면 사이즈가 바뀔 경우에도 일정하게 정렬
  box-sizing: border-box;
  color: #d9d9d9;
`;

function StringAlarmRender() {
  return (
    <MainContainer>
      <Alarm type={'Request'} />
      <Alarm type={'RequestApprove'} />
      <Alarm type={'InfoFix'} />
      <Alarm type={'RequestDenial'} />
    </MainContainer>
  );
}

export default StringAlarmRender;
