import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputDiv = styled.input`
  font-size: 16px;
  height: 20px;
  width: 295px;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  outline: none;
  color: black;
  ::placeholder {
    color: #9c9c9c;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  width: 300px; /* 필요에 따라 조절 */
  margin-bottom: 40px;
`;

const ToggleButton = styled.button`
  font-size: 11px;
  position: absolute;
  height: 22px;
  top: 0;
  right: 0;
  cursor: pointer;
  color: white;
  background-color: #005950;
  &:active {
    opacity: 0.3;
  }
  border-radius: 4px;
  border: none;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 8px;
`;

const SuccessMessage = styled.div`
  color: black;
  font-size: 8px;
`;

function Email() {
    const [email, setEmail] = useState('');
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

    return (
        <InputContainer className="App">
            <InputWrapper>
                <InputDiv
                    type="text"
                    className="input"
                    placeholder="학교 이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <ToggleButton onClick={() => validateEmail()}>
                    {'인증번호 전송'}
                </ToggleButton>
                {emailError && (
                    <ErrorMessage>이메일 형식이 맞지 않습니다.</ErrorMessage>
                )}
                {codeSent && (
                    <SuccessMessage>인증번호가 발송되었습니다.</SuccessMessage>
                )}
            </InputWrapper>

            <InputDiv type="text" className="input" placeholder="인증번호" />
        </InputContainer>
    );
}

export default Email;