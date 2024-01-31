import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isAdminState } from '../recoil/recoil';
import Name from '../components/input/Name';
import Count from '../components/input/Count';
import Button from '../components/Button';
import { ReactComponent as ImageIcon } from '../assets/image.svg';
import Swal from "sweetalert2";

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 28px 32px 100px 32px;
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
    padding-bottom: 76px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Input = styled.input`
  display: none; // 화면에 안보이게 하기 위함
`;

const GoodsInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const ReturnContainer = styled.div`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.black};
    font-size: 16px;
    font-weight: 600;
    padding-top: 32px;
    padding-bottom: 60px;
    gap: 16px;
`;

const CheckBox = styled.input`
    width: 16px;
    height: 16px;
`;

function GoodsRegistration() {
  const headerProps = {
    // header에 들어갈 페이지 제목은 여기서 수정
    title: '물품 등록',
  };

  const [isAdmin, setIsAdmin] = useRecoilState(isAdminState); // 관리자(true), 사용자(false) -> 전역변수로 관리

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

  const navigate = useNavigate();

  // 반납여부 체크
  const [isReturn, setIsReturn] = useState(false);

  const returnCheckboxChange = (e) => {
    setIsReturn(e.target.checked);
  };

  // 대여신청 버튼을 클릭하였을 때
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const clickRentalButton = () => {
    setIsButtonDisabled(true);  // 버튼 클릭하면 disabled 되게

    Swal.fire({
      title: '물품을 등록하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#005950',  // 이 부분은 전역 색상이 안써져서 매년 수정해야할 것 같음
      cancelButtonColor: '#D43434',
      confirmButtonText: '등록',
      cancelButtonText: '취소',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // '신청' 버튼을 누르면 2초 뒤에 확인창 뜸
        setTimeout(() => {
          Swal.fire(
            {
              title: '물품 등록이 완료되었습니다.',
              icon: 'success',
              confirmButtonColor: '#005950',  // 이 부분은 전역 색상이 안써져서 매년 수정해야할 것 같음
              confirmButtonText: '확인'
            }).then(() => {navigate('/main');
          });
        }, 2000);
      } else {
        setIsButtonDisabled(false);  // 대여신청 취소 버튼을 누르면 버튼이 다시 활성화 되도록
      }
    });
  };


  return (
    <Layout headerProps={headerProps} isAdmin={isAdmin}>
      <RegisterContainer>
        <ImageContainer>
          <ImageBox onClick={clickImageWrapper}>
            {uploadedImage ? (
              <Image src={uploadedImage} alt="Uploaded" />
            ) : (
              <ImageIcon />
            )}
          </ImageBox>
        </ImageContainer>
        <GoodsInfoContainer>
          <Name />
          <Count />
        </GoodsInfoContainer>
        <ReturnContainer>
          <CheckBox type={"checkbox"} checked={isReturn} onChange={returnCheckboxChange}/>
          반납이 필요한 물품입니다.
        </ReturnContainer>
        <Button onClick={clickRentalButton} disabled={isButtonDisabled} size="Large" cancel={false}>
          물품 등록
        </Button>
        <Input
          type="file"
          accept="image/*"
          ref={imageInputRef}
          onChange={imageUpload}
        />
      </RegisterContainer>
    </Layout>
  );
}

export default GoodsRegistration;
