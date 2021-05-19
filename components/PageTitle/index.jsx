import styled from "styled-components";
import { fonts } from "../../themeConfig/index";

const PageTitle = styled.h1`
  color: ${({ theme }) => theme.text};
  font-family: ${() => fonts.display};
  font-size: 4rem;

  @media only screen and (max-width: 540px) {
    text-align: center;
    max-width: 90%;
  }
`;

export default PageTitle;
