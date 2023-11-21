import { ButtonHTMLAttributes } from "react";
import { BtnContainer } from "./styled";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: string;
  width?: string;
  height?: string;
}

export const Button = ({ text, variant, width, height }: IButtonProps) => {
  return <BtnContainer variant={variant} width={width} height={height}>{text}</BtnContainer>;
};
