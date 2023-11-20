import { FormEvent } from "react";
import { StyledForm } from "./styled";

interface IFormProps {
  title?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
}

export const Form = ({ title, onSubmit, children }: IFormProps) => {
  return (<StyledForm onSubmit={onSubmit} autoComplete="off">
    <header>
      <h1>{title}</h1>
    </header>
    {children}
  </StyledForm>)
}