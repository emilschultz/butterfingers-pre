import styled from "styled-components";
import { fonts } from "../../themeConfig";

const Grid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 3fr));
  grid-template-rows: auto;
  margin: 15rem 0rem;
  grid-gap: 5rem;

  .item-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    border: 0.1rem solid ${({ theme }) => theme.text};

    transition: 0.1s ease-in;
    padding: 2rem;

    :hover {
      transform: scale(1.01);
    }
  }

  div {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  p {
    font-size: 1.6rem;
  }

  .drop-location {
    text-decoration: underline;
    font-weight: 700;
  }

  .no-results {
    text-align: center;
    text-decoration: underline;
    font-family: ${() => fonts.display};
    font-weight: bolder;
  }

  img {
    width: 100%;
    height: 40%;
    object-fit: cover;
    border: 0.1rem solid ${({ theme }) => theme.text};
  }
`;

export default Grid;
