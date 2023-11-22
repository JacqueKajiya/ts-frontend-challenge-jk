import { Icon, StyledFieldSet } from "./styled";

interface IInputProps {
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errors?: string | string[];
  icon?: string;
}


export const Input = ({ type, value, placeholder, onChange, errors, icon }: IInputProps) => {
  return (
    <StyledFieldSet>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} required={true} />
      {icon && <Icon src={icon} alt="ícone" />}
      {errors && <span>{errors}</span>}
    </StyledFieldSet>
  )
}