import Layout from '../components/layout/Layout';
import { RecoilRoot } from 'recoil';
import styled from "styled-components";
import xLogo from "../assets/xLogo.svg";
import connectLogoWhite from "../assets/connectLogoWhite.svg";
import winkLogo from "../assets/winkLogo.svg";
import image from "../assets/image.svg";
import Button from "../components/Button";


const Container = styled.div`
  width: 100%;
  background-color: #005950;
  height: 199.2px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 500;
  font-size: 24px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;
`;

const WinkLogo = styled.img`
  width: 87px;
  height: 37.45px;
`;

const XLogo = styled.img`
  width: 28px;
  height: 28px;
  padding-left: 5px;
  padding-right: 16px;
`;

const ConnectLogoWhite = styled.img`
  width: 52px;
  height: 46px;
`;

const ListContainer = styled.div`
  width: 100%;
  height: calc(100vh - 256px);
  box-sizing: border-box;
  padding-bottom: 65px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap:50px;
  width: 100%;
  height: 150px;
  border-bottom: 1px solid black;
`;


const ItemImage = styled.img`
  width: 48px; /* Adjust the width of the image as needed */
  height: 48px; /* Adjust the height of the image as needed */
`;

const dummyData = [
    { imgSrc: image, goodsName: '물품 1', state: 0, },
    { imgSrc: image, goodsName: '물품 2', state: 1 },
    { imgSrc: image, goodsName: '물품 3', state: 2 },
    { imgSrc: image, goodsName: '물품 3', state: 2 },
    { imgSrc: image, goodsName: '물품 3', state: 2 },
    { imgSrc: image, goodsName: '물품 3', state: 2 },
    { imgSrc: image, goodsName: '물품 3', state: 2 },
    { imgSrc: image, goodsName: '물품 3', state: 2 },

];

const stateList = ['대여하기', '신청취소', '반납하기'];


function MainPage() {
    const headerProps = {
        title: '물품 대여',
    };

    return (
            <div>
                <Container>
                    <ImageContainer>
                        <WinkLogo src={winkLogo} alt="Wink Logo" />
                        <XLogo src={xLogo} alt="X Logo" />
                        <ConnectLogoWhite src={connectLogoWhite} alt="Connect Logo White" />
                    </ImageContainer>
                    <TextContainer>
                        <div>국민대학교 소프트웨어학부</div>
                        <div>복지물품 대여 시스템</div>
                    </TextContainer>
                </Container>

                <ListContainer>
                    {dummyData.map((item, index) => (
                        <ListItem key={index}>
                            <ItemImage src={image} alt={item.imgSrc} />
                            {item.goodsName}
                            <Button children = {stateList[item.state]} size="Medium" cancel = {item.state == 1}></Button>
                        </ListItem>
                    ))}
                </ListContainer>
            </div>
    );
}

export default MainPage;