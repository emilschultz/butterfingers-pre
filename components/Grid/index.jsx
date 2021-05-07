import styled from "styled-components";

const Grid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 3fr));
  grid-template-rows: auto;
  border: 1px solid ${({ theme }) => theme.text}; ;
`;

export default Grid;
