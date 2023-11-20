import styled, { css } from "styled-components";

interface IButtonProps {
  width?: string;
  height?: string;
  variant?: string;
}

export const BtnContainer = styled.button<IButtonProps>`
  background-color: transparent;
  border: none;
  outline-color: var(--color-secondary);
  color: transparent;
  font-size: 16px;
  
  padding: 0 20px;
  transition: 0ms.2s ease-in-out;
  width: ${({ width }) =>
    width === "small"
      ? `160px`
      : width === "medium"
      ? `180px`
      : width === "large"
      ? `318px`
      : `320px`};
  height: ${({ height }) => (height === "medium" ? `40px` : `48px`)};

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: var(--color-secondary);
      color: var(--color-white);
      
      :disabled{
        cursor: not-allowed;
        background-color: var(--color-primary);
      }

      :hover{
        opacity: 0.5;
      }
    `}

    ${({ variant }) =>
      variant === "secondary" &&
      css`
        background-color: var(--color-white);
        color: var(--color-secondary);

        :hover{
          opacity: 0.5;
        }
      `}
`;
