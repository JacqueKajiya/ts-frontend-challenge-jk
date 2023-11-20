interface IButtonProps {
  text: string;
  variant: string;
}

export const Button = ({ text, variant }) => {
  return <BtnContainer variant={variant}>{text}</BtnContainer>;
};
