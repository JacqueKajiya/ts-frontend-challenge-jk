import { ButtonHTMLAttributes } from "react";
import { BtnContainer } from "./styled";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: string;
}

export const Button = ({ text, variant, ...rest }: IButtonProps) => {
  return <BtnContainer variant={variant} {...rest}>{text}</BtnContainer>;
};
