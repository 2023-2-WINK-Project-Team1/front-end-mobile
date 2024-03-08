import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logoGreen from '../assets/logo_green.svg';
import StudentId from '../components/input/StudentId';
import Name from '../components/input/Name';
import Email from '../components/input/Email';
import PasswordInput from '../components/input/PasswordInput';
import PasswordInputCheck from '../components/input/PasswordInputCheck';
import Button from '../components/Button';
import accountAPI from '../api/accountAPI';

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
  color: var(--primary-color);
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
`;

const InputContainer = styled.div`
  margin-top: 42px;
  margin-bottom: 42px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

function SignUp() {
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState('');
  const [studentIdValue, setStudentIdValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [certificateNumber, setCertificateNumber] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordCheckValue, setPasswordCheckValue] = useState('');

  const errorList = [
    '이름을',
    '학번을',
    '이메일을',
    '인증번호를',
    '비밀번호를',
    '비밀번호 확인을',
  ];
  const checkEmpty = () => {
    const valueList = [
      nameValue,
      studentIdValue,
      emailValue,
      certificateNumber,
      passwordValue,
      passwordCheckValue,
    ];
    for (let i = 0; i < valueList.length; i++) {
      if (valueList[i].trim() === '') {
        alert(`${errorList[i]} 입력해주세요.`);
        return false;
      }
    }
    if (emailError) {
      alert('이메일 인증을 완료해주세요.');
      return false;
    }
    return true;
  };

  const handleSignInClick = () => {
    // 빈 칸이 없는지 검사. 없으면 다음 형식들 검사 실행
    if (!checkEmpty()) return;
    // 이름에 숫자가 포함되어 있는지 확인
    const hasNumber = /\d/.test(nameValue);
    const hasLetterInStudentId = /[a-zA-Z]/.test(studentIdValue);

    if (hasNumber) {
      // 숫자와 문자 포함되어 있으면 알림 창 띄우기
      alert('이름을 한글로 작성해주세요.');
    } else if (hasLetterInStudentId) {
      alert('학번 형식이 틀렸습니다.');
    } else if (passwordValue !== passwordCheckValue) {
      // 비밀번호와 비밀번호 확인 값이 다를 때 알림창 띄우기
      alert('비밀번호가 틀렸습니다. 다시 입력해주세요.');
    } else {
      // 숫자가 포함되어 있지 않고 비밀번호가 일치하면 회원가입 페이지로 이동
      return true;
    }
  };

  const signUp = async () => {
    if (!handleSignInClick()) return;

    const data = {
      user_number: studentIdValue,
      name: nameValue,
      email: emailValue,
      code: certificateNumber,
      password: passwordValue,
      password2: passwordCheckValue,
    };
    try {
      const res = await accountAPI.signUp(data);
      console.log('signUp res : ', res);
      navigate('/login');
    } catch (error) {
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <MainContainer>
      <img src={logoGreen} alt="로고" />
      <InputContainer>
        <Name onChange={setNameValue} value={nameValue} />
        <StudentId onChange={setStudentIdValue} value={studentIdValue} />
        <Email
          value={emailValue}
          onChange={setEmailValue}
          certificationNumber={certificateNumber}
          setCertificationNumber={setCertificateNumber}
          emailError={emailError}
          setEmailError={setEmailError}
        />
        <PasswordInput onChange={setPasswordValue} value={passwordValue} />
        <PasswordInputCheck
          onChange={setPasswordCheckValue}
          value={passwordCheckValue}
        />
      </InputContainer>
      <Button size="Large" onClick={() => signUp()}>
        회원가입완료
      </Button>
      <SignUpText>
        이미 회원이신가요?
        <SignUpLink onClick={() => navigate('/sign-in')}> 로그인</SignUpLink>
      </SignUpText>
    </MainContainer>
  );
}

export default SignUp;
