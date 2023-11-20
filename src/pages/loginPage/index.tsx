import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { StyledAuthBackground, StyledAuthContainer } from "../../styles/AuthBackground"
import { IAuthData } from "../../interfaces/auth.interfaces";
import { StyledSection } from "./styled";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Form } from "../../components/form";

export const Login = () => {
  const [loginData, setLoginData] = useState<IAuthData | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    fetch('https://front.evob.dev.marcomapa.com/front_challenge/info')
      .then((response) => response.json())
      .then((data) => setLoginData(data))
      .catch((error) => console.error('Erro ao buscar informações:', error));

  }, []);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <StyledAuthBackground>
      <StyledAuthContainer>
        <img src="https://front.evob.dev.marcomapa.com/front_challenge/TapttooMobile.png" alt="Logo" />

        <Form title={"Acesse sua conta"} onSubmit={handleLogin}>
          <Input type="email" placeholder="email" value={email} onChange={handleEmail} />

          <Input type="password" placeholder="senha" value={password} onChange={handlePassword} />

          <Button type="submit" variant="primary" text="Entrar" />
          <a>Esqueceu sua senha ?!</a>
        </Form>

        <StyledSection>

          <p>Ainda não tem conta?</p>
          <button><a href="">Cadastre-se</a></button>
        </StyledSection>


      </StyledAuthContainer>
    </StyledAuthBackground>
  )
}