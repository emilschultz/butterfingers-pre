import styled from "styled-components";
import { fonts } from "../../themeConfig/index";

const HeadingOne = styled.h1`
  color: ${({ theme }) => theme.text};
  font-family: ${() => fonts.display};
  font-size: 3.2rem;
  font-weight: 700;
  margin: 0;
`;

export default HeadingOne;
