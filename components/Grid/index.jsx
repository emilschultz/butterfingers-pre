import styled from "styled-components";

const Grid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 3fr));
  grid-template-rows: auto;
  border-top: 1px solid ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.text};
  padding: 1rem 0rem;
`;

export default Grid;
