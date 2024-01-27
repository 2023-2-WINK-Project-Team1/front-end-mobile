import styled from 'styled-components';
// 알림, 홈(사용자화면), 마이페이지(사용자화면), 물품대여내역(관리자화면),물품관리및등록(관리자화면) 아이콘 SVG 파일
import { ReactComponent as AlarmIcon } from '../../assets/alram.svg';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as MypageIcon } from '../../assets/mypage.svg';
import { ReactComponent as ListIcon } from '../../assets/list.svg';
import { ReactComponent as UploadIcon } from '../../assets/upload.svg';
// 푸터에서 어떤 아이콘을 눌렀는지 확인하기 위해 recoil 사용
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedButtonState, isAdminState } from '../../recoil/recoil';

const FooterContainer = styled.div`
  display: flex;
  //justify-content: space-between; // 아이콘을 양쪽 방향으로 두기 위함
  align-items: center;
  width: 100%;
  height: 65px;
  background: ${(props) => props.theme.primary};
  justify-content: center; // 가운데 정렬 추가
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  //gap: 120px; // 버튼 사이의 간격 조정 (피그마와 비율이 달라서 임의로 조정함)
  justify-content: space-around;
`;

const Button = styled.div`
  cursor: pointer;
`;

// 알림 버튼
const AlarmButton = styled(Button)`
  // 버튼을 클릭했을 때, 아이콘의 투명도를 1로 설정
  // 버튼을 클릭하지 않았을 때, 아이코늬 투명도를 0.5로 설정
  svg {
    fill-opacity: ${(props) => (props.isSelected ? 1 : 0.5)};
  }
`;

// 홈 버튼(사용자)
const HomeButton = styled(Button)`
  svg {
    fill-opacity: ${(props) => (props.isSelected ? 1 : 0.5)};
  }
`;

// 물품대여내역 버튼(관리자)
const ListButton = styled(Button)`
  svg {
    fill-opacity: ${(props) => (props.isSelected ? 1 : 0.5)};
  }
`;

// 마이페이지 버튼(사용자)
const MypageButton = styled(Button)`
  svg {
    fill-opacity: ${(props) => (props.isSelected ? 1 : 0.5)};
  }
`;

// 물품관리및등록(관리자)
const UploadButton = styled(Button)`
  svg {
    fill-opacity: ${(props) => (props.isSelected ? 1 : 0.5)};
  }
`;

function Footer() {
  /* useRecoilState 훅을 사용하여 selectedButtonState의 Recoil 상태를 가져와 값을 관리하는 React 상태를 선언
     - selectedButton: 현재 selectedButtonState의 값을 저장하는 변수
     - setSelectedButton: selectedButtonState의 값을 업데이트하는 함수 */
  const selectedButton = useRecoilValue(selectedButtonState);
  const setSelectedButton = useSetRecoilState(selectedButtonState);
  const isAdmin = useRecoilState(isAdminState);

  // default로 불이 들어오는 button설정
  if (!selectedButton) {
    if (isAdmin[0]) setSelectedButton('list'); // 관리자일때는 listIcon
    else setSelectedButton('home'); // 사용자일때는 homeIcon
  }

  /* 버튼이 클릭되었을 때 실행되는 콜백 함수
     useRecoilState(selectedButtonState)에서 반환된 setSelectedButton 함수를 호출하여 selectedButtonState의 값을 업데이트*/
  const isClicked = (button) => {
    setSelectedButton(button);
  };

  return (
    // onClick: 'alarm'버튼이 클릭되었을 때 isClicked 실행
    // isSelected: selectedButton이 'alarm'일 경우 true로 설정되어 해당 버튼 활성화
    <FooterContainer>
      <ButtonContainer>
        <AlarmButton
          onClick={() => isClicked('alarm')}
          isSelected={selectedButton === 'alarm'}
        >
          <AlarmIcon />
        </AlarmButton>
        {isAdmin[0] ? ( // isAdmin = true(관리자)일 때, <ListButton> 렌더링
          <ListButton
            onClick={() => isClicked('list')}
            isSelected={selectedButton === 'list'}
          >
            <ListIcon />
          </ListButton>
        ) : (
          // isAdmin = false(사용자)일 때, <HomeButton> 렌더링
          <HomeButton
            onClick={() => isClicked('home')}
            isSelected={selectedButton === 'home'}
          >
            <HomeIcon />
          </HomeButton>
        )}
        {isAdmin[0] ? ( // isAdmin = true(관리자)일 때, <UploadButton> 렌더링
          <UploadButton
            onClick={() => isClicked('upload')}
            isSelected={selectedButton === 'upload'}
          >
            <UploadIcon />
          </UploadButton>
        ) : (
          // isAdmin = false(사용자)일 때, <MypageButton> 렌더링
          <MypageButton
            onClick={() => isClicked('mypage')}
            isSelected={selectedButton === 'mypage'}
          >
            <MypageIcon />
          </MypageButton>
        )}
      </ButtonContainer>
    </FooterContainer>
  );
}

export default Footer;
