import styled from 'styled-components';

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

function TestPage() {
  return (
    <>
      <HorizontalWrapper>
        <h2>가로 정렬 </h2>
      </HorizontalWrapper>
      <VerticalWrapper>
        <h2>세로 정렬 </h2>
      </VerticalWrapper>
    </>
  );
}

export default TestPage;
