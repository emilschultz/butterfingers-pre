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
    margin: 20px;
  }

  div {
    display: flex;
  }

  & .bf-logo {
    margin: 0;
  }
`;

export default NavBarStyle;
