import styled from 'styled-components';
// 알림, 홈(사용자화면), 마이페이지(사용자화면), 물품대여내역(관리자화면),물품관리및등록(관리자화면) 아이콘 SVG 파일
import { ReactComponent as AlarmIcon } from '../../assets/alram.svg';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as MypageIcon } from '../../assets/mypage.svg';
import { ReactComponent as ListIcon } from '../../assets/list.svg';
import { ReactComponent as UploadIcon } from '../../assets/upload.svg';
// 푸터에서 어떤 아이콘을 눌렀는지 확인하기 위해 recoil 사용
import { useLocation, useNavigate } from 'react-router-dom'; // useNavigate 훅 추가
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedButtonState, isAdminState } from '../../recoil/recoil';

const FooterContainer = styled.div`
  display: flex;
  //justify-content: space-between; // 아이콘을 양쪽 방향으로 두기 위함
  align-items: center;
  width: 100%;
  height: 65px;
  background: var(--primary-color);
  justify-content: center; // 가운데 정렬 추가
  position: absolute;
  bottom: 0; // footer를 화면 하단에 고정
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
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로를 확인하기 위해 useLocation 훅 사용
  const isAdmin = useRecoilValue(isAdminState); // Recoil에서 관리자 여부 가져오기

  // 현재 경로에 따른 버튼 선택 상태 결정
  const getSelectedButton = () => {
    const path = location.pathname;
    if (path.includes('/notification')) return 'alarm';
    if (path.includes('/admin-main')) return 'list';
    if (path === '/main') return 'home';
    if (path.includes('/goods-management')) return 'upload';
    if (path.includes('/mypage')) return 'mypage';
    return ''; // Default case
  };

  const handleButtonClick = (button) => {
    switch (button) {
      case 'alarm':
        navigate('/notification');
        break;
      case 'list':
        navigate('/admin-main');
        break;
      case 'home':
        navigate('/main');
        break;
      case 'upload':
        navigate('/goods-management');
        break;
      case 'mypage':
        navigate('/mypage');
        break;
      default:
        break;
    }
  };

  const selectedButton = getSelectedButton(); // 현재 선택된 버튼 가져오기

  return (
    <FooterContainer>
      <ButtonContainer>
        <AlarmButton
          onClick={() => handleButtonClick('alarm')}
          isSelected={selectedButton === 'alarm'}
        >
          <AlarmIcon />
        </AlarmButton>
        {isAdmin && (
          <>
            <ListButton
              onClick={() => handleButtonClick('list')}
              isSelected={selectedButton === 'list'}
            >
              <ListIcon />
            </ListButton>
            <UploadButton
              onClick={() => handleButtonClick('upload')}
              isSelected={selectedButton === 'upload'}
            >
              <UploadIcon />
            </UploadButton>
          </>
        )}
        {!isAdmin && (
          <>
            <HomeButton
              onClick={() => handleButtonClick('home')}
              isSelected={selectedButton === 'home'}
            >
              <HomeIcon />
            </HomeButton>
            <MypageButton
              onClick={() => handleButtonClick('mypage')}
              isSelected={selectedButton === 'mypage'}
            >
              <MypageIcon />
            </MypageButton>
          </>
        )}
      </ButtonContainer>
    </FooterContainer>
  );
}

export default Footer;
