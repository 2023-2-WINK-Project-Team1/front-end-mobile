import React, { useState } from 'react';
import styled from "styled-components";
import iconpassword1 from "../../assets/iconpassword1.svg";
import iconpassword2 from "../../assets/iconpassword2.svg";
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
  margin-bottom: 40px;
`;

function PasswordCheck() {

    //비밀번호
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const getPasswordIcon = () => {
        return showPassword ? iconpassword1 : iconpassword2;
    };

    return (
        <InputContainer className="App">
            <InputWrapper>
                <InputImage src={getPasswordIcon()} alt="Icon" onClick={togglePasswordVisibility}/>
                <InputDiv
                    type={showPassword ? "text" : "password"}
                    className="input"
                    placeholder="비밀번호 확인"
                />
            </InputWrapper>
        </InputContainer>
    )
};


export default PasswordCheck;






