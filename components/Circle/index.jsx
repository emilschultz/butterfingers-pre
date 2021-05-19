import styled from "styled-components";

const Circle = styled.div`
  width: 50rem;
  height: 50rem;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0.5rem solid ${({ theme }) => theme.text};
  font-size: 2.3rem;
  font-weight: 700;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    padding: 5rem 4rem;
  }

  /* @media only screen and (max-width: 320px) {
    width: 15rem;
    height: 15rem;
    margin: 3rem 0rem;
    padding: 0;

    a {
      padding: 0;
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 375px) {
    width: 18rem;
    height: 18rem;
    margin: 3rem 0rem;
    padding: 0;

    a {
      padding: 0;
      font-size: 1.2rem;
    }
  } */

  @media only screen and (max-width: 540px) {
    width: 20rem;
    height: 20rem;
    margin: 3rem 0rem;
    padding: 0;

    a {
      padding: 0;
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 823px) {
    width: 20rem;
    height: 20rem;
    margin: 3rem;
    padding: 0;

    a {
      padding: 0;
      font-size: 1.2rem;
    }
  }
`;
export default Circle;
