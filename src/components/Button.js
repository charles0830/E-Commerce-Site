import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: var(--mainBlue);
  border: 0.05rem solid var(--mainWhite);
  color: var(--mainWhite);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.2s ease-in-out;
  &:hover{
    background: var(--mainWhite);
    color: var(--mainBlue);
    border: 0.05rem solid var(--mainBlue);
  }
  &:focus{
    outline: none;
  }
`