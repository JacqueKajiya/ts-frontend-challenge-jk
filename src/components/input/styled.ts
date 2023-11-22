import styled from "styled-components";

export const StyledFieldSet = styled.fieldset`
  width: 100%;
  max-width: 320px;
  text-align: start;
  border: none;

  padding-top: 32px;
  position: relative;

  input{
    width: 100%;
    height: 29px;
    color: var(--color-secondary);
    font-size: 18px;
    font-weight: 600;
    border: none;
    border-bottom: 3px solid var(--color-secondary);
  }

  input:focus{
    outline: none;
    border-bottom: 2px solid var(--color-secondary);
  }

  ::placeholder{
    color: var(--color-input-placeholder);
    font-weight: 300;
    font-size: 18px;
  }

  span{
    color: var(--negative);
  }
`;

export const Icon = styled.img`
  width: 20px;
  position: absolute;
  right: 0;
`;
