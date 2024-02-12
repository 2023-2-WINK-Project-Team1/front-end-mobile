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

function StudentId({ onChange, value }) {
  const [studentIdValue, setStudentIdValue] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setStudentIdValue(newValue);
    onChange(newValue);
  };
  return (
    <InputContainer>
      <InputDiv
        type="text"
        className="input"
        placeholder="학번"
        value={value}
        onChange={handleInputChange}
      />
    </InputContainer>
  );
}

export default StudentId;
