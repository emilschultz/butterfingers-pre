import styled from "styled-components";

const Form = styled.form`
  margin: 0rem 8rem;
  display: flex;
  flex-direction: column;

  input {
    width: 60rem;
    height: 3.5rem;
    margin: 2rem 0rem;
    border: solid 0.1rem ${({ theme }) => theme.text};
    padding: 0.8rem;
  }

  button {
    width: 5rem;
    height: 3rem;
    padding: 0.8rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.body};
    border: solid 0.1rem ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};

    &:hover {
      background-color: ${({ theme }) => theme.text};
      border: solid 0.1rem ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.body};
    }

    & .file-upload-button {
      background-color: blue;
      color: red;

      cursor: pointer;
    }
  }
`;
export default Form;
