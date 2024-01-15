import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoGreen from '../assets/logo_green.svg';
import StudentId from '../components/input/StudentId';
import PasswordInput from '../components/input/PasswordInput';
import Button from '../components/Button';

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

const CheckBoxContainer = styled.div`
  display: flex;
  color: #7a7a7a;
  font-size: 12px;
  font-weight: 600;
  align-items: center;
  text-align: center;
  cursor: pointer;
  gap: 8px;
`;

const CheckBox = styled.input`
  color: #7a7a7a;
  width: 16px;
  height: 16px;
  align-self: flex-start;
`;

const SignUpText = styled.p`
  font-size: 16px;
  color: #7a7a7a;
`;

const SignUpLink = styled(Link)`
  color: #005950;
  text-decoration: none;
  font-size: 16px;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-top: 146px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

function SignIn() {
    return (
        <MainContainer>
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
            <SignUpText>
                회원이 아니신가요?<SignUpLink to="/SignUp"> 회원가입</SignUpLink>
            </SignUpText>
        </MainContainer>
    );
}

export default SignIn;