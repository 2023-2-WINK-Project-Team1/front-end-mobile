import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import { useRecoilState } from 'recoil';
import { isAdminState } from '../recoil/recoil';
import defaultImage from "../assets/defaultImage.svg";
import Button from '../components/Button';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
  gap: 28px;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  gap: 20px;
`;

const ItemLabel = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const ItemUser = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const ItemTime = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const ImageBox = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
`;

const dummyData =
    { imgSrc: defaultImage, label: "우산", user:"찬우", time:"23:00"}
;

function ReturnManager() {
    const headerProps = {
        title: '물품 반납',
    };

    const [isAdmin, setIsAdmin] = useRecoilState(isAdminState);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsAdmin(false);
    });

    const clickRentalButton = () => {
        setIsButtonDisabled(true);

        Swal.fire({
            title: '반납 신청을 처리하겠습니까?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#005950',
            cancelButtonColor: '#D43434',
            confirmButtonText: '완료',
            cancelButtonText: '취소',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                setTimeout(() => {
                    Swal.fire(
                        {
                            title: '반납 신청 처리가 완료되었습니다.',
                            icon: 'success',
                            confirmButtonColor: '#005950',
                            confirmButtonText: '확인'
                        }).then(() => {
                        setIsButtonDisabled(false);
                        navigate('/');
                    });
                }, 2000);
            } else {
                setIsButtonDisabled(false);
            }
        });
    };

    return (
        <Layout headerProps={headerProps} isAdmin={isAdmin}>
            <MyPageContainer>
                    <ListContainer>
                        <ImageBox>
                            <Image src={dummyData.imgSrc} alt={defaultImage} />
                        </ImageBox>
                        <ListItem>
                            <ItemLabel>대여 물품: {dummyData.label}</ItemLabel>
                            <ItemUser>대여자: {dummyData.user}</ItemUser>
                            <ItemTime>대여 시간: {dummyData.time}</ItemTime>
                        </ListItem>
                    </ListContainer>
                <Button onClick={clickRentalButton} disabled={isButtonDisabled} size="Large" cancel={false}>
                    반납 완료 처리
                </Button>
            </MyPageContainer>
        </Layout>
    );
}

export default ReturnManager;
