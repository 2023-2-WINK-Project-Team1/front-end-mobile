import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import { useRecoilState } from 'recoil';
import { isAdminState } from '../recoil/recoil';
import Time from '../components/input/Time';
import Button from '../components/Button';
import { ReactComponent as ImageIcon } from '../assets/image.svg';

const RentalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 56px;
  height: 100%;
  padding: 28px 32px;
  box-sizing: border-box;
`;

const ImageBox = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${(props) => props.theme.lightGray};
  cursor: pointer;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 28px;
  gap: 8px;
  //margin-bottom: 51px; // 외부 요소인 버튼과의 간격 조절을 위해 margin 사용
`;

const Text = styled.div`
  color: ${(props) => props.theme.black};
  font-size: 20px;
  font-weight: 700;
`;

const Input = styled.input`
  display: none; // 화면에 안보이게 하기 위함
`;

function UserRental() {
  const headerProps = {
    // header에 들어갈 페이지 제목은 여기서 수정
    title: '대여 신청',
  };

  const [isAdmin, setIsAdmin] = useRecoilState(isAdminState); // 관리자(true), 사용자(false)

  // 특정 값으로 isAdmin 설정하는 함수
  const setAdminStatus = (value) => {
    setIsAdmin(value);
  };

  // user 대여 신청이므로 false
  setAdminStatus(false);

  /* 이미지 업로드 기능
     uploadedImage: 현재 업로드된 이미지의 Base64 인코딩 데이터 저장
   */
  const [uploadedImage, setUploadedImage] = useState(null);
  const imageInputRef = useRef(null);

  // 이미지를 업로드 할 때 호출되는 함수
  const imageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
    console.log('uploadedImage : ', uploadedImage);
  };

  // <ImageBox> 컴포넌트 클릭하면 호출되는 함수
  const clickImageWrapper = () => {
    imageInputRef.current.click();
  };

  return (
    <Layout headerProps={headerProps} isAdmin={isAdmin}>
      <RentalContainer>
        <ImageContainer>
          <ImageBox onClick={clickImageWrapper}>
            {uploadedImage ? (
              <Image src={uploadedImage} alt="Uploaded" />
            ) : (
              <ImageIcon />
            )}
          </ImageBox>
          <Text>물품1</Text>
        </ImageContainer>
        <TimeContainer>
          <Text>대여 시간</Text>
          <Time />
        </TimeContainer>
        <Button disabled={false} size="Large" cancel={false}>
          대여 신청
        </Button>
        <Input
          type="file"
          accept="image/*"
          ref={imageInputRef}
          onChange={imageUpload}
        />
      </RentalContainer>
    </Layout>
  );
}

export default UserRental;
