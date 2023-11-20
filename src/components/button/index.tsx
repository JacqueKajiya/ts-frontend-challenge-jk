import { BtnContainer } from "./styled";

interface IButtonProps {
  text?: string;
  variant?: string;
}

export const Button = ({ text, variant, ...rest }: IButtonProps) => {
  return <BtnContainer {...rest} variant={variant}>{text}</BtnContainer>;
};
