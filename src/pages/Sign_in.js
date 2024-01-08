import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom'; // react-router-dom에서 Link를 import
import logoGreen from "../assets/logo_green.svg";
import StudentId from "../components/input/StudentId";
import PasswordInput from "../components/input/PasswordInput";
import Button from "../components/Button";

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 172px;
  height: 152px;
  margin-top: 38px;
`;
const Margin = styled.div`
  margin-top: 28px;
`;

const Button_margin = styled.div`
  margin-top: 32px;
`;

const Name_margin = styled.div`
  margin-top: 146px;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  color: #7A7A7A;
  font-size: 12px;
  align-items: center;
  margin-right: 220px;
  //justify-content:start;

`;

const CheckBox = styled.input`
  margin-right: 8px; // 체크박스와 텍스트 사이의 간격 조절
  color: #7A7A7A;
  width: 16px;
  height: 16px;
`;

const SignUpText = styled.p`
  margin-top: 12px;
  font-size: 16px;
  color: #7A7A7A ;
`;

const SignUpLink = styled(Link)`
  color: #005950; 
  text-decoration: none; 
  cursor: pointer;
  margin-top: 12px;
  font-size: 16px;
`;


function Sign_in() {
    return (
        <CenteredDiv>
            <LogoImage src={logoGreen} alt="Logo" />
            <Name_margin/>
            <StudentId />
            <Margin/>
            <PasswordInput />
            <Margin/>
            <CheckBoxContainer>
                <CheckBox type="checkbox" />
                자동로그인
            </CheckBoxContainer>
            <Button_margin>
                <Button size="Large">로그인</Button>
            </Button_margin>
            <SignUpText>회원이 아니신가요?<SignUpLink to="/sign_up"> 회원가입</SignUpLink></SignUpText>
        </CenteredDiv>
    );
}

export default Sign_in;
