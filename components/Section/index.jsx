import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.lost {
    height: 100%;
    margin-top: 8rem;
  }

  @media only screen and (max-height: 410px) {
    margin-top: 5.5rem;
  }
`;
export default Section;
