import React, { useState } from 'react';
import styled from "styled-components";
import 'react-datepicker/dist/react-datepicker.css';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputDiv = styled.input`
  height: 21px;
  width: 295px;
  border: none;
  border-bottom: 1px solid #E6E6E6;
  outline: none;
  margin-bottom: 10px;
  ::placeholder {
    color: #9C9C9C;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 300px; /* 필요에 따라 조절 */
`;

const ToggleButton = styled.button`
  font-size: 11px;
  position: absolute;
  width: 76px;
  height: 22px;
  top: 30%;
  right: 5px;
  transform: translateY(-50%);
  cursor: pointer;
  color: white;
  background-color: #005950;
  &:active {
    opacity: 0.3;
  } 
  border-radius: 4px;
  border:none;
`;




function Email() {

    //이메일 형식 안맞으면 버튼 비활성화
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const validateEmail = () => {
        console.log("gun")
        // 이메일 유효성 검사를 수행하고, 형식이 맞지 않으면 에러를 설정
        const emailRegex = /^[^\s@]+@kookmin\.ac\.kr$/;
        const isValid = emailRegex.test(email);
        // 에러가 발생했을 때만 이메일 내용을 지움
        if (!isValid) {
            setEmail('');
            console.log(isValid)
            setEmailError(true);
        }
        else{
            console.log(isValid)
            setEmailError(false);
        }
    };


    return (
        <InputContainer className="App">

            <InputWrapper>
                <InputDiv
                    type="text"
                    className="input"
                    placeholder={emailError ? "이메일 정보가 맞지 않습니다." : "학교 이메일"}
                    isError={emailError}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <ToggleButton
                    onClick={() => validateEmail()}
                    // disabled={emailError}
                >
                    {"인증번호 전송"}
                </ToggleButton>
            </InputWrapper>

            <InputDiv
                type="text"
                className="input"
                placeholder="인증번호"
            />

        </InputContainer>
    );
}

export default Email;





