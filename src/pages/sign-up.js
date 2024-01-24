import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import logoGreen from "../assets/logo_green.svg";
import StudentId from "../components/input/StudentId";
import Name from "../components/input/Name";
import Email from "../components/input/Email";
import PasswordInput from "../components/input/PasswordInput";
import PasswordInputCheck from "../components/input/PasswordInputCheck";
import Button from "../components/Button";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 32px;
  box-sizing: border-box;
`;

const LogoImage = styled.img``;

const SignUpText = styled.p`
  font-size: 16px;
  color: #7A7A7A ;
`;

const SignUpLink = styled.span`
  color: #005950; 
  text-decoration: none; 
  cursor: pointer;
  font-size: 16px;
`;

const InputContainer = styled.div`
  margin-top: 42px;
  margin-bottom: 42px;
  padding:42px;
  display: flex;
  flex-direction: column;
  gap:40px;
  width: 100%;
`;

function SignUp() {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/signIn');
    };

    return (
        <MainContainer>
            <LogoImage src={logoGreen} alt="로고" />

            <InputContainer>
                <Name/>
                <StudentId />
                <Email/>
                <PasswordInput />
                <PasswordInputCheck/>
            </InputContainer>

            <Button size="Large" onClick={handleSignInClick}>회원가입완료</Button>
            <SignUpText>이미 회원이신가요?<SignUpLink onClick={handleSignInClick}> 로그인</SignUpLink></SignUpText>
        </MainContainer>
    );
}

export default SignUp;
