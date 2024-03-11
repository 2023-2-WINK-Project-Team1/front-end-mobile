import Layout from '../components/layout/Layout';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import xLogo from '../assets/xLogo.svg';
import connectLogoWhite from '../assets/connectLogoWhite.svg';
import winkLogo from '../assets/winkLogo.svg';
import defaultImage from '../assets/defaultImage.svg';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import itemAPI from '../api/itemAPI';
import rentalAPI from '../api/rentalAPI';

const Container = styled.div`
  width: 100%;
  background-color: var(--primary-color);
  height: 200px;
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
  width: 86px;
  height: 38px;
`;

const XLogo = styled.img`
  width: 28px;
  height: 28px;
  padding-left: 4px;
  padding-right: 16px;
`;

const ConnectLogoWhite = styled.img`
  width: 52px;
  height: 46px;
`;

const ListContainer = styled.div`
  width: 100%;
  height: calc(100vh - 256px);
  padding: 0 20px 64px 20px;
  box-sizing: border-box;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItem = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #d8d8d8;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 22px;
`;

const Remaining = styled.div`
  color: var(--gray-color);
  font-size: 12px;
  font-weight: 500;
`;

const GoodsName = styled.div`
  width: 100px;
  overflow: hidden;
  word-break: break-all;
  font-size: 20px;
  font-weight: 500;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const stateList = ['대여하기', '신청취소', '대여중'];

function MainPage() {
  const navigate = useNavigate();
  const headerTitle = '물품 대여';
  const userCookie =
    'eyJhbGciOiJIUzI1NiJ9.NjVkZDk3Y2Y3NWFlOWQzYmIwZTQwZGY5.oQxBqYgZ5LQphz_omqlO6w77we3_0mHj1SJ6xarqUeA';

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [itemList, setItemList] = useState([]);
  const updateItemListState = (allItems, userRentalList) => {
    const updatedItems = allItems.map((item) => {
      const reversedRentalList = [...userRentalList].reverse();

      const rentalInfo = reversedRentalList.find(
        (rental) => rental.item === item._id,
      );
      let state;
      let rentalId;
      if (
        !rentalInfo ||
        (rentalInfo.approved !== null && rentalInfo.returned !== null)
      ) {
        state = 0; // 대응하는 rental 정보가 없거나, approved와 returned가 모두 null이 아닌 경우
        rentalId = '';
      } else if (rentalInfo.approved === null) {
        state = 1; // 대여 승인 대기중
        rentalId = rentalInfo._id;
      } else if (rentalInfo.approved !== null && rentalInfo.returned === null) {
        state = 2; // 대여중
        rentalId = rentalInfo._id;
      }
      return {
        ...item,
        state: state,
        rentalId: rentalId,
      };
    });
    return updatedItems;
  };
  const cancelRental = async (rentalId) => {
    // const cookie = cookies.auth_token;
    const res = await rentalAPI.cancelRental(userCookie, rentalId);
    if (res.status === 200) {
      Swal.fire({
        title: '신청이 취소되었습니다.',
        icon: 'success',
        confirmButtonColor: 'var(--primary-color)',
        confirmButtonText: '확인',
      });
      fetchAndUpdateItems();
    } else {
      Swal.fire({
        title: '신청 취소에 실패하였습니다.',
        icon: 'error',
        confirmButtonColor: 'var(--primary-color)',
        confirmButtonText: '확인',
      });
    }
  };

  const fetchAndUpdateItems = async () => {
    const allItemsResponse = await itemAPI.getAllItemList();
    const allItems = allItemsResponse.data;
    const userRentalResponse = await rentalAPI.getUserRentalList(userCookie);
    const userRentalList = userRentalResponse.data;
    const updatedItemList = updateItemListState(allItems, userRentalList);

    setItemList(updatedItemList);
  };

  useEffect(() => {
    fetchAndUpdateItems();
  }, []);

  const handleBase64 = (byteArray) => {
    const byteCharacters = byteArray.reduce(
      (data, byte) => data + String.fromCharCode(byte),
      '',
    );
    const base64String = btoa(byteCharacters);
    return `data:image/jpeg;base64,${base64String}`;
  };

  const handleRentalClick = (item) => {
    if (item.state === 0) {
      navigate('../user-rental', { state: { item: item } });
    } else if (item.state === 1) {
      Swal.fire({
        title: '신청을 취소하시겠습니까?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'var(--primary-color)',
        cancelButtonColor: 'var(--red-color)',
        confirmButtonText: '예',
        cancelButtonText: '아니요',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          cancelRental(item.rentalId);
        } else {
          setIsButtonDisabled(false); // 아니요 버튼을 누르면 버튼이 다시 활성화 되도록
        }
      });
    } else if (item.state === 2) {
      Swal.fire({
        title: '반납을 신청하시겠습니까?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'var(--primary-color)',
        cancelButtonColor: 'var(--red-color)',
        confirmButtonText: '예',
        cancelButtonText: '아니요',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // '신청' 버튼을 누르면 2초 뒤에 확인창 뜸
          setTimeout(() => {
            Swal.fire({
              title: '반납을 완료하였습니다.',
              icon: 'success',
              confirmButtonColor: 'var(--primary-color)',
              confirmButtonText: '확인',
            }).then(() => {
              navigate('/');
            });
          }, 2000);
        } else {
          setIsButtonDisabled(false); // 아니요 버튼을 누르면 버튼이 다시 활성화 되도록
        }
      });
    }
  };

  return (
    <>
      <Header headerTitle={headerTitle} />
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
        {itemList.map((item, index) => (
          <ListItem key={index}>
            <ItemImage src={handleBase64(item.image.data)} alt={defaultImage} />
            <GoodsName>{item.product_name}</GoodsName>
            <ButtonContainer>
              <Button
                children={stateList[item.state]}
                size="Medium"
                cancel={item.state === 1}
                disabled={item.state === 2}
                onClick={() => handleRentalClick(item)}
              />
              <Remaining>남은 수량: {item.count}</Remaining>
            </ButtonContainer>
          </ListItem>
        ))}
      </ListContainer>
      <Footer />
    </>
  );
}

export default MainPage;
