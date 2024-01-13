import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import logoGreen from "../assets/logo_green.svg";
import StudentId from "../components/input/StudentId";
import PasswordInput from "../components/input/PasswordInput";
import Button from "../components/Button";

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LogoImage = styled.img`
`;

const CheckBoxContainer = styled.div`
  display: flex;
  color: #7A7A7A;
  font-size: 12px;
  font-weight:600;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

const CheckBox = styled.input`
  margin-right: 8px; // 체크박스와 텍스트 사이의 간격 조절
  color: #7A7A7A;
  width: 16px;
  height: 16px;
  align-self : flex-start;
`;

const SignUpText = styled.p`
  font-size: 16px;
  color: #7A7A7A ;
`;

const SignUpLink = styled(Link)`
  color: #005950; 
  text-decoration: none; 
  font-size: 16px;
`;

const InputContainer = styled.div`
  margin-top:146px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap:28px;
`;


function SignIn() {
    return (
        <CenteredDiv>
            <LogoImage src={logoGreen} alt="Logo" />

            <InputContainer>
                <StudentId />
                <PasswordInput />
                <CheckBoxContainer>
                    <CheckBox type="checkbox" />
                    자동로그인
                </CheckBoxContainer>
            </InputContainer>

                <Button size="Large">로그인</Button>
            <SignUpText>회원이 아니신가요?<SignUpLink to="/signUp"> 회원가입</SignUpLink></SignUpText>
        </CenteredDiv>
    );
}

export default SignIn;
