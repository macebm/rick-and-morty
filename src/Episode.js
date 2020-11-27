import styled from "styled-components";

export default function Episode({ name, air_date, episode }) {
  return (
    <Wrapper>
      <h3>Name of Episode:</h3>
      <p>{name}</p>
      <h3>Air date of Episode:</h3>
      <p>{air_date}</p>
      <h3>Number of Episode:</h3>
      <p>{episode}</p>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 auto 30px auto;
  width: 300px;
  text-align: center;
  background: #1f2151;
  padding: 5px;
  color: #f7f53f;

  p {
    color: white;
  }
`;
