import React from 'react';
import styled from "styled-components";
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
  border-bottom: 1px solid #E6E6E6;
  outline: none;
  margin-bottom: 40px;
  ::placeholder {
    color: #9C9C9C;
  }
`;

function StudentId() {
    return (
        <InputContainer className="App">
            <InputDiv
                type="text"
                className="input"
                placeholder="학번"
            />
        </InputContainer>
    );
}

export default StudentId;





