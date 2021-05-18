import styled from "styled-components";

const Circle = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.text};
  font-size: 1.3rem;
  font-weight: 700;

  a {
    color: ${({ theme }) => theme.body};
    text-decoration: none;
    padding: 5rem 4rem;
  }
`;
export default Circle;
