import styled from "styled-components";

export default function NotFound() {
  return (
    <Wrapper>
      <h1>404 page not found</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: red;
  display: flex;
  justify-content: center;
`;
