import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logoGreen from '../assets/logo_green.svg';
import StudentId from '../components/input/StudentId';
import PasswordInput from '../components/input/PasswordInput';
import Button from '../components/Button';
import accountAPI from '../api/accountAPI';
import { useCookies } from 'react-cookie';
import Swal from 'sweetalert2';

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
  color: var(--primary-color);
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
  const [passwordValue, setPasswordValue] = useState('');
  const [cookies, setCookies] = useCookies(['auth_token']);
  const [disabled, setDisabled] = useState(false);
  // const handleCheckBoxClick = () => {
  //   setAutoLogin(!autoLogin);
  // };
  const errorList = ['학번을', '비밀번호를'];
  const checkEmpty = () => {
    const valueList = [studentIdValue, passwordValue];
    for (let i = 0; i < valueList.length; i++) {
      if (valueList[i].trim() === '') {
        Swal.fire({
          title: `${errorList[i]} 입력해주세요.`,
          icon: 'error',
          confirmButtonColor: 'var(--primary-color)',
          confirmButtonText: '확인',
        });
        return false;
      }
    }
    if (studentIdValue.length !== 8 || !/^\d+$/.test(studentIdValue)) {
      Swal.fire({
        title: '학번을 올바르게 입력해주세요.',
        icon: 'error',
        confirmButtonColor: 'var(--primary-color)',
        confirmButtonText: '확인',
      });
      return false;
    }
    setDisabled(true);
    return true;
  };

  const signIn = async () => {
    if (!checkEmpty()) return;
    const data = {
      user_number: studentIdValue,
      password: passwordValue,
    };
    console.log('data : ', data);
    try {
      const res = await accountAPI.signIn(data);
      console.log('res : ', res);
      // 로그인 성공 후 받은 토큰을 쿠키에 저장
      await setCookies('auth_token', res.data.user.token);
      setDisabled(false);
      navigate('/main');
    } catch (error) {
      if (error.response) {
        Swal.fire({
          title: error.response.data,
          icon: 'error',
          confirmButtonColor: 'var(--primary-color)',
          confirmButtonText: '확인',
        });
      }
      console.error('error :', error);
      setDisabled(false);
    }
  };

  return (
    <MainContainer>
      <img src={logoGreen} alt="로고" />
      <InputContainer>
        <StudentId value={studentIdValue} onChange={setStudentIdValue} />
        <PasswordInput value={passwordValue} onChange={setPasswordValue} />
        {/*<CheckBoxContainer onClick={handleCheckBoxClick}>*/}
        {/*  <CheckBox type="checkbox" checked={autoLogin} />*/}
        {/*  자동로그인*/}
        {/*</CheckBoxContainer>*/}
      </InputContainer>
      <Button size="Large" onClick={() => signIn()} disabled={disabled}>
        로그인
      </Button>
      <SignUpText>
        회원이 아니신가요?
        <SignUpLink onClick={() => navigate('/sign-up')}> 회원가입</SignUpLink>
      </SignUpText>
    </MainContainer>
  );
}

export default SignIn;
