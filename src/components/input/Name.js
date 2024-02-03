import React, { useState } from 'react';
import styled from 'styled-components';
import iconX from '../../assets/IconX.svg';
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

const InputImage = styled.img`
  position: absolute;
  top: 30%;
  right: 10px; /* 이미지의 오른쪽 여백 조절 */
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%; /* 필요에 따라 조절 */
`;

function Name({ value, setValue }) {
  // 이름 지우기
  const handleClear = () => {
    setValue('');
  };

  return (
    <InputContainer>
      <InputWrapper>
        <InputImage
          src={iconX}
          alt="Icon"
          onClick={() => handleClear('name')}
        />
        <InputDiv
          type="text"
          className="input"
          placeholder="이름"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </InputWrapper>
    </InputContainer>
  );
}

export default Name;
