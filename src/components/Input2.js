import React, { useState } from 'react';
import styled from "styled-components";
import DatePicker from 'react-datepicker';
import iconpassword1 from "../assets/iconpassword1.svg";
import iconpassword2 from "../assets/iconpassword2.svg";
import iconX from "../assets/iconX.svg";
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

const StyledDatePicker = styled(DatePicker)`
  border: none;
  border-bottom: 1px solid #E6E6E6;  
  outline: none;
  height: 21px;
  width: 295px;
`;




function Input() {
    //대여시간
    const [startTime, setStartTime] = useState(null);
    const onSelect = (time) => {
        setStartTime(time);
    };

    //비밀번호
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const getPasswordIcon = () => {
        return showPassword ? iconpassword1 : iconpassword2;
    };

    //비밀번호 확인
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const toggleCheckPasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    const checkPasswordIcon = () => {
        return isPasswordVisible ? iconpassword1 : iconpassword2;
    };


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
            <InputDiv
                type="text"
                className="input"
                placeholder="학번"
            />

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

            <InputWrapper>
                <InputImage src={getPasswordIcon()} alt="Icon" onClick={togglePasswordVisibility}/>
                <InputDiv
                    type={showPassword ? "text" : "password"}
                    className="input"
                    placeholder="비밀번호"
                />
            </InputWrapper>

            <InputWrapper>
                <InputImage src={checkPasswordIcon()} alt="Icon" onClick={toggleCheckPasswordVisibility}/>
                <InputDiv
                    type={isPasswordVisible ? "text" : "password"}
                    className="input"
                    placeholder="비밀번호 확인"
                />
            </InputWrapper>

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

            <InputWrapper>
                <InputDiv
                    type="number"
                    className="input"
                    placeholder="수량"
                    min="0"  // 최소값을 0로 설정
                />
            </InputWrapper>

            <InputWrapper>
                <StyledDatePicker
                    selected={startTime}
                    onChange={(time) => onSelect(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="대여시간"
                    dateFormat=" aa h:mm"
                    placeholderText="대여시간"
                />
            </InputWrapper>

        </InputContainer>
    );
}

export default Input;





