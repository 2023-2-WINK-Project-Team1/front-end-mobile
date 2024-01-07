import styled from 'styled-components';
import { ReactComponent as BackIcon } from '../../assets/back.svg';
import { ReactComponent as SettingIcon } from '../../assets/setting.svg';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between; // 자식 요소들을 양 끝으로 분산 정렬
  align-items: center;
  width: 100%; // 화면 크기에 맞추기 위해서
  height: 56px;
  background: ${(props) => props.theme.white};
`;

const BackButton = styled(BackIcon)`
  margin-left: 16px;
`;

const SettingButton = styled(SettingIcon)`
  margin-right: 16px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.black};
  font-size: 20px;
  text-align: center; // 텍스트 중앙 정렬
`;

// title을 전달 받아서 제목이 달라지게 함
function Header({ title }) {
  return (
    <StyledHeader>
      <BackButton />
      <Title>{title}</Title>
      <SettingButton />
    </StyledHeader>
  );
}

export default Header;
