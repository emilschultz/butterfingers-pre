import styled from "styled-components";

const Footer = styled.footer`
  height: 5rem;
  width: 100%;
  border-top: 0.1rem solid ${({ theme }) => theme.text};
  padding: 2rem 0rem;
  margin-top: 5rem;
  position: absolute;
  bottom: 0;
`;

export default Footer;
