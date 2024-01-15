import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
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

const LogoImage = styled.img`
`;


const SignUpText = styled.p`
  font-size: 16px;
  color: #7A7A7A ;
`;

const SignUpLink = styled(Link)`
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
    return (
        <MainContainer>

            <LogoImage src={logoGreen} alt="Logo" />

            <InputContainer>
                <Name/>
                <StudentId />
                <Email/>
                <PasswordInput />
                <PasswordInputCheck/>
            </InputContainer>

            <Link to="/signIn">
                <Button size="Large">회원가입완료</Button>
            </Link>
            <SignUpText>이미 회원이신가요?<SignUpLink to="/SignIn"> 로그인</SignUpLink></SignUpText>

        </MainContainer>
    );
}

export default SignUp;
