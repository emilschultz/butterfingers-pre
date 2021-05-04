import styled from "styled-components";
import theme from "../../themeConfig";

const NavBarStyle = styled.ul`
  display: flex;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  padding: 0;
  border-bottom: 1px solid black;
  color: ${({ theme }) => theme.text};
`;

export default NavBarStyle;
