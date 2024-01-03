import styled from 'styled-components';

const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function TestPage() {
  return (
    <>
      <HorizontalWrapper>
        <h1>가로 정렬 </h1>
      </HorizontalWrapper>
      <VerticalWrapper>
        <h1>세로 정렬 </h1>
      </VerticalWrapper>
    </>
  );
}

export default TestPage;
