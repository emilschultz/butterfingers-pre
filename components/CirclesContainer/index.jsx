import styled from "styled-components";

const CirclesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0rem;

  @media only screen and (max-width: 540px) {
    flex-direction: column;
    margin: 0;
  }

  @media only screen and (max-width: 767px) {
    margin: 0;
  }
`;
export default CirclesContainer;
