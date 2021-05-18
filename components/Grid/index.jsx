import styled from "styled-components";

const Grid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 3fr));
  grid-template-rows: auto;
  margin: 15rem 0rem;
  /* border-top: 1px solid ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.text};
  padding: 4rem 0rem; */
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    cursor: pointer;
    padding: 1.5rem;
    border: 0.1rem solid ${({ theme }) => theme.text};
    margin: 0 -0.1rem -0.1rem 0;
  }

  p {
    font-size: 1.6rem;
  }

  .drop-location {
    text-decoration: underline;
  }

  img {
    width: 100%;
    height: 40%;
    object-fit: cover;
    border: 0.1rem solid ${({ theme }) => theme.text};
  }
`;

export default Grid;
