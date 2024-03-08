import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import instagram from '../assets/AppInfo/instagram.svg';
import kakaotalk from '../assets/AppInfo/kakaotalk.svg';
import youtube from '../assets/AppInfo/youtube.svg';
import winkOriginal from '../assets/AppInfo/wink-original.svg';
import logoWink from '../assets/AppInfo/logo-wink.svg';
import logoGreen from '../assets/AppInfo/logo-green.svg';
import logoX from '../assets/AppInfo/logo-x.svg';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 28px 36px 0 36px;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
`;
const AppTitle = styled.span`
  font-size: 28px;
  text-align: center;
  font-weight: 600;
`;
const InfoItem = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.gray};
`;

const ContactWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
const WinkLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: #3a70ff;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Logo = styled.img`
  &:nth-child(1) {
    width: 110px;
    margin-rignt: 4px;
  }
  &:nth-child(3) {
    width: 80px;
    margin-rignt: 12px;
  }
  width: 40px;
  height: auto;
`;
function AppInfo() {
  const headerProps = {
    title: '앱 정보',
  };
  return (
    <Layout headerProps={headerProps}>
      <MainContainer>
        <InfoContainer>
          <LogoWrapper>
            <Logo src={logoWink} alt="wink" />
            <Logo src={logoX} alt="x" />
            <Logo src={logoGreen} alt="green" />
          </LogoWrapper>
          <AppTitle>
            국민대학교 소프트웨어학부
            <br />
            복지물품 대여 서비스
          </AppTitle>
          <InfoItem>
            본 서비스는 국민대학교 소프트웨어학부 학생회에서 제공하는 복지물품
            대여 서비스입니다.
          </InfoItem>
          <InfoItem>버전 : 1.0.0 (2024.02.04 update)</InfoItem>
          <InfoItem>서비스 : 국민대학교 웹 학술 동아리 WINK</InfoItem>
          <InfoItem>
            주소: 서울특별시 성북구 정릉로 77 국민대학교 미래관
          </InfoItem>
          <InfoItem>About Us</InfoItem>
          <ContactWrapper>
            <a href="https://www.instagram.com/kmu_connect/">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="http://pf.kakao.com/_Yquyxl">
              <img src={kakaotalk} alt="kakaotalk" />
            </a>
            <a href="https://www.youtube.com/results?search_query=%EA%B5%AD%EB%AF%BC%EB%8C%80%ED%95%99%EA%B5%90+%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%ED%95%99%EB%B6%80">
              <img src={youtube} alt="youtube" />
            </a>
            <a href="https://wink.kookmin.ac.kr/">
              <WinkLogoWrapper>
                <img src={winkOriginal} alt="wink-full" />
              </WinkLogoWrapper>
            </a>
          </ContactWrapper>
        </InfoContainer>
      </MainContainer>
    </Layout>
  );
}
export default AppInfo;
