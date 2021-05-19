import styled from "styled-components";

const IndividualResultItem = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;

  img {
    width: 50%;
    height: 50%;
    margin-right: 2.5rem;
    border: 0.1rem solid ${({ theme }) => theme.text};
    object-fit: cover;
  }

  div {
    margin-left: 2.5rem;
    width: 50%;
    font-size: 2rem;
  }

  @media only screen and (max-width: 540px) {
    flex-direction: column;
    height: 150%;
    flex-direction: column-reverse;

    div {
      margin-left: 0;
    }
    img {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 812px) {
    height: 120%;

    img {
      height: 75%;
    }
  }
`;
export default IndividualResultItem;
