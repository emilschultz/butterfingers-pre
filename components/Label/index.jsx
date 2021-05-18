import styled from "styled-components";

const Label = styled.label`
  cursor: pointer;
  border: solid 0.1rem ${({ theme }) => theme.text};
`;
export default Label;
