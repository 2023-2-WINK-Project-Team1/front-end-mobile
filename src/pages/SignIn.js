import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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

const CheckBoxContainer = styled.div`
  display: flex;
  color: #7a7a7a;
  font-size: 12px;
  font-weight: 600;
  align-items: center;
  text-align: center;
  cursor: pointer;
  gap: 8px;
  width: fit-content;
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

const SignUpLink = styled.span`
  color: #005950;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
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
  const navigate = useNavigate();
  const [autoLogin, setAutoLogin] = useState(false);
  const [studentIdValue, setStudentIdValue] = useState('');

  const handleSignUpClick = () => {
    navigate('/sign-up');
  };

  const handleCheckBoxClick = () => {
    setAutoLogin(!autoLogin);
  };

  const handleStudentIdChange = (newValue) => {
    setStudentIdValue(newValue);
  };

  return (
    <MainContainer>
      <img src={logoGreen} alt="로고" />

      <InputContainer>
        <StudentId onChange={handleStudentIdChange} />
        <PasswordInput onChange={handleStudentIdChange} />
        <CheckBoxContainer onClick={handleCheckBoxClick}>
          <CheckBox type="checkbox" checked={autoLogin} />
          자동로그인
        </CheckBoxContainer>
      </InputContainer>

      <Button size="Large">로그인</Button>
      <SignUpText>
        회원이 아니신가요?
        <SignUpLink onClick={handleSignUpClick}> 회원가입</SignUpLink>
      </SignUpText>
    </MainContainer>
  );
}

export default SignIn;
