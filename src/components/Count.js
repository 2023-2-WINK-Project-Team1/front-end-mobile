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



function Count() {

    return (
        <InputContainer className="App">

            <InputWrapper>
                <InputDiv
                    type="number"
                    className="input"
                    placeholder="수량"
                    min="0"  // 최소값을 0로 설정
                />
            </InputWrapper>

        </InputContainer>
    );
}

export default Count;





