import styled from "styled-components";

const Form = styled.form`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 100%;
    height: 7.5rem;
    margin: 2rem 0rem;
    border-top: solid 0.1rem ${({ theme }) => theme.text};
    border-bottom: solid 0.1rem ${({ theme }) => theme.text};
    border-left: none;
    border-right: none;
    padding: 0.8rem;
    text-align: center;
    background-color: rgba(255, 255, 255, 0);
    text-transform: uppercase;
    color: ${({ theme }) => theme.text};
    ::placeholder {
      color: ${({ theme }) => theme.text};
    }
  }

  button {
    width: 8rem;
    height: 8rem;
    margin-top: 2.5rem;
    font-size: 1.1rem;
    background-color: ${({ theme }) => theme.body};
    border: 0.1rem solid ${({ theme }) => theme.text};
    border-radius: 50%;
    color: ${({ theme }) => theme.text};

    background-image: radial-gradient(
      circle at center,
      ${({ theme }) => theme.text} 50%,
      transparent 50%
    );
    background-repeat: no-repeat;
    transition: background-size 0.2s, color 0.2s;
    background-size: 0 0;
    background-position: 50% 50%;

    cursor: pointer;
    &:hover {
      background-size: 200% 200%;
      color: ${({ theme }) => theme.body};
      border: 0.1rem solid ${({ theme }) => theme.text};
      transform: scale(1.3);
      transition: 0.75s ease-in-out;
    }
  }

  .file-upload-button {
    border: none;
  }

  @media only screen and (max-width: 540px) {
    text-justify: center;
    width: 90%;
  }
`;
export default Form;
