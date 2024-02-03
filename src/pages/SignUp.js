import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logoGreen from '../assets/logo_green.svg';
import StudentId from '../components/input/StudentId';
import Name from '../components/input/Name';
import Email from '../components/input/Email';
import Certification from '../components/input/Certification';
import PasswordInput from '../components/input/PasswordInput';
import PasswordInputCheck from '../components/input/PasswordInputCheck';
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

const SignUpText = styled.p`
  font-size: 16px;
  color: #7a7a7a;
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
  padding: 42px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

function SignUp() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [certification, setCertification] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [codeSent, setCodeSent] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@kookmin\.ac\.kr$/;
    const isValid = emailRegex.test(email);

    if (!isValid) {
      setEmailError(true);
      setCodeSent(false);
    } else {
      setEmailError(false);
      setCodeSent(true);
    }
  };
  const handleSignInClick = () => {
    // studentId가 숫자만 포함하고 있는지 검사하는 정규식
    const isNumeric = /^\d+$/;

    if (!isNumeric.test(studentId)) {
      alert('학번은 숫자만 포함해야 합니다.');
      return; // 숫자가 아니면 여기서 함수 종료
    }
    console.log('userName:', userName);
    console.log('studentId:', studentId);
    console.log('email:', email);
    console.log('password:', password);
    console.log('passwordCheck:', passwordCheck);
    // navigate('/sign-in');
  };

  return (
    <MainContainer>
      <img src={logoGreen} alt="로고" />
      <InputContainer>
        <Name value={userName} setValue={setUserName} />
        <StudentId value={studentId} setValue={setStudentId} />
        <Email
          value={email}
          setValue={setEmail}
          emailError={emailError}
          validateEmail={validateEmail}
          codeSent={codeSent}
        />
        <Certification value={certification} setValue={setCertification} />
        <PasswordInput value={password} setValue={setPassword} />
        <PasswordInputCheck value={passwordCheck} setValue={setPasswordCheck} />
      </InputContainer>

      <Button size="Large" onClick={handleSignInClick}>
        회원가입완료
      </Button>
      <SignUpText>
        이미 회원이신가요?
        <SignUpLink onClick={handleSignInClick}> 로그인</SignUpLink>
      </SignUpText>
    </MainContainer>
  );
}

export default SignUp;
