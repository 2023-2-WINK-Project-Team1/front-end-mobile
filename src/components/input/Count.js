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
  width: 100%;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  outline: none;
  ::placeholder {
    color: #9c9c9c;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%; /* 필요에 따라 조절 */
`;

function Count() {
  return (
    <InputContainer>
      <InputWrapper>
        <InputDiv
          type="number"
          className="input"
          placeholder="수량"
          min="0" // 최소값을 0로 설정
        />
      </InputWrapper>
    </InputContainer>
  );
}

export default Count;
