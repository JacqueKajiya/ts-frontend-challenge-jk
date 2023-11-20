import { StyledFieldSet } from "./styled";

interface IInputProps {
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errors?: string;
}


export const Input = ({ type, value, placeholder, onChange, errors }: IInputProps) => {
  return (
    <StyledFieldSet>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} required={true} />
      {errors && <span>{errors}</span>}
    </StyledFieldSet>
  )
}