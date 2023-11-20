import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { StyledAuthBackground, StyledAuthContainer } from "../../styles/AuthBackground"
import { IAuthData } from "../../interfaces/auth.interfaces";
import { StyledForm } from "../../components/form/styled";
import { StyledSection } from "./styled";
import { Input } from "../../components/input";

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

        <StyledForm onSubmit={handleLogin}>
          <h1>Acesse sua conta</h1>
          <Input type="email" placeholder="email" value={email} onChange={handleEmail} />

          <Input type="password" placeholder="senha" value={password} onChange={handlePassword} />

          <button type="submit">Entrar</button>
        </StyledForm>

        <StyledSection>
          <a>Esqueceu sua senha ?!</a>

          <p>Ainda não tem conta?</p>
          <button><a href="">Cadastre-se</a></button>
        </StyledSection>


      </StyledAuthContainer>
    </StyledAuthBackground>
  )
}