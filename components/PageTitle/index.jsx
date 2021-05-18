import styled from "styled-components";
import { fonts } from "../../themeConfig/index";

const PageTitle = styled.h1`
  color: ${({ theme }) => theme.text};
  margin: 0rem 8rem;
  font-family: ${() => fonts.display};
  font-size: 4rem;
`;

export default PageTitle;
