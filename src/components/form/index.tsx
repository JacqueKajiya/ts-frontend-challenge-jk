import React from "react";
import { StyledForm } from "./styled";

interface IFormProps {
  title?: string;
  submitCallback?: () => void;
  href?: string;
  hrefTitle?: string;
  children?: React.ReactNode;
}

export const Form = ({ title, submitCallback, href, hrefTitle, children }: IFormProps) => {
  <StyledForm onSubmit={submitCallback}>
    <header>
      <h1>{title}</h1>
      <a href={href}>{hrefTitle}</a>
    </header>
    {children}
  </StyledForm>
}