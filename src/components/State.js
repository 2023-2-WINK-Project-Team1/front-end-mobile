import styled, { css } from 'styled-components';

const State = styled.div`
  width: 62px;
  height: 22px;
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
  text-align: center;
  white-space: nowrap;

  // 공통 스타일
  color: white;
  font-size: 16px; /* 폰트 크기를 조절 */

  // props에 따른 변화
  ${(props) => css`
    // 상태에 따라 색상과 문구 변경
    background-color: ${props.status === 1
      ? '#005950'
      : props.status === 2
      ? '#00595099'
      : props.status === 3
      ? '#D9D9D9'
      : 'blue'};
  `}
`;

export default State;
