import styled from "styled-components";

const Label = styled.label`
  display: flex;
  cursor: pointer;
  width: 8rem;
  height: 8rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.text};
  border: 0.1rem solid ${({ theme }) => theme.text};

  background-image: radial-gradient(
    circle at center,
    ${({ theme }) => theme.text} 50%,
    transparent 50%
  );
  background-repeat: no-repeat;
  transition: background-size 0.2s, color 0.2s;
  background-size: 0 0;
  background-position: 50% 50%;

  &:hover {
    background-size: 200% 200%;
    color: ${({ theme }) => theme.body};
    border: 0.1rem solid ${({ theme }) => theme.text};
    transform: scale(1.3);
    transition: 0.75s ease-in-out;
  }

  input {
    display: none;
  }
`;
export default Label;
