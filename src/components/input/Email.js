import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const InputDiv = styled.input`
  font-size: 16px;
  height: 20px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  outline: none;
  color: black;
  ::placeholder {
    color: #9c9c9c;
  }
`;

const InputDivWithButton = styled.div`
  position: relative;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  width: 100%;
`;

const ToggleButton = styled.button`
  font-size: 12px;
  position: absolute;
  height: 22px;
  right: 0;
  bottom: 4px;
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
  font-size: 10px;
`;

const SuccessMessage = styled.div`
  color: black;
  font-size: 10px;
`;

function Email({ value, setValue, emailError, codeSent, validateEmail }) {
  return (
    <InputContainer>
      <InputWrapper>
        <InputDivWithButton>
          <InputDiv
            type="text"
            placeholder="학교 이메일"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <ToggleButton onClick={() => validateEmail()}>
            {'인증번호 전송'}
          </ToggleButton>
        </InputDivWithButton>
        {emailError && (
          <ErrorMessage>이메일 형식이 맞지 않습니다.</ErrorMessage>
        )}
        {codeSent && (
          <SuccessMessage>인증번호가 발송되었습니다.</SuccessMessage>
        )}
      </InputWrapper>
    </InputContainer>
  );
}

export default Email;
