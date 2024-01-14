import styled from 'styled-components';
import Alarm from '../components/Alarm';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  justify-content: flex-start;
  align-self: center;
  box-sizing: border-box;
  color: #d9d9d9;
`;

function StringAlarmRender() {
  return (
    <MainContainer>
      <Alarm type={'Request'} />
      <Alarm type={'InfoFix'} />
    </MainContainer>
  );
}

export default StringAlarmRender;
