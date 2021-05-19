import styled from "styled-components";

const NavBarStyle = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  font-size: 2rem;
  color: ${(theme) => theme.text};

  a {
    color: ${({ theme }) => theme.text};

    text-decoration: none;
    margin-right: 3rem;
  }

  div {
    display: flex;
  }

  & .bf-logo {
    margin-left: -30px;
    font-size: 2.8rem;
    font-weight: 700;
  }

  button {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border: 0.2rem solid ${({ theme }) => theme.text};
    transition: 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.body};
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 540px) {
    font-size: 1.4rem;
    justify-content: flex-start;

    div {
      width: 100%;
      justify-content: space-evenly;
    }
    a {
    }

    & .bf-logo {
      margin-left: -10rem;
      display: none;
    }
    button {
      display: none;
    }
  }

  @media only screen and (max-width: 767px) {
    font-size: 1.4rem;
    justify-content: center;
    flex-direction: row-reverse;
    align-items: center;

    div {
      width: 100%;
      justify-content: center;
    }
    a {
      margin: 0rem 3rem;
    }

    .bf-logo {
      font-size: 2.8rem;
      font-weight: 700;
    }
    button {
      display: none;
    }
  }
`;

export default NavBarStyle;
