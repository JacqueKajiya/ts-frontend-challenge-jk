import { FormEvent, useEffect, useState } from "react";
import { StyledAuthBackground, StyledAuthContainer } from "../../styles/AuthBackground"
import { IAuthData } from "../../interfaces/auth.interfaces";

const Login = () => {
  const [loginData, setLoginData] = useState<IAuthData | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://front.evob.dev.marcomapa.com/front_challenge/info')
        const result = await response.json();
        setLoginData(result);
      } catch (error) {
        console.error(error);
      }
    };

    getData()
  }, []);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <StyledAuthBackground>
      <StyledAuthContainer>
        <img src="" alt="Logo" />

        <form onSubmit={handleLogin}>
          <h1>Acesse sua conta</h1>
          <input type="email" placeholder="email" required></input>
          <input type="password" placeholder="senha" required></input>

          <button type="submit">{loginData?.texts.section_login.login_call}</button>
        </form>

        <a>{loginData?.texts.section_login.forgot}</a>

        <p>{loginData?.texts.section_login.register}</p>
        <button><a href="">{loginData?.texts.section_login.registercall}</a></button>

      </StyledAuthContainer>
    </StyledAuthBackground>
  )
}