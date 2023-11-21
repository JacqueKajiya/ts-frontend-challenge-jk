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
  font-weight: 500;
  
  padding: 0 20px;
  transition: 0.3s ease;

  width: ${({ width }) =>
    width === "small"
      ? `160px`
      : width === "medium"
      ? `180px`
      : width === "large"
      ? `318px`
      : `320px`};
  height: ${({ height }) => (height === "medium" ? `48px` : `40px`)};
  cursor: pointer;

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: var(--color-secondary);
      color: var(--color-white);
      
      :disabled{
        cursor: not-allowed;
        background-color: var(--color-primary);
      }

      &:hover{
        opacity: 0.5;
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: var(--color-white);
      color: var(--color-secondary);

      border: 1px solid var(--color-secondary);
      
      &:hover{
        opacity: 0.5;
        }
      `}
`;
