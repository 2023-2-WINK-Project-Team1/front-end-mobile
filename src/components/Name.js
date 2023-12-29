import React, { useState } from 'react';
import styled from "styled-components";
import iconX from "../assets/iconX.png";
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
  width: 300px; /* 필요에 따라 조절 */
`;

function Name() {
    // 이름 지우기
    const [name, setName] = useState('');
    const handleClear = (field) => {
        switch (field) {
            case 'name':
                setName('');
                break;
            default:
                break;
        }
    }

    return (
        <InputContainer className="App">

            <InputWrapper>
                <InputImage src={iconX} alt="Icon" onClick={() => handleClear('name')} />
                <InputDiv
                    type="text"
                    className="input"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </InputWrapper>

        </InputContainer>
    );
}

export default Name;





