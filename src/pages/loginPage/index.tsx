import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { StyledAuthBackground, StyledAuthContainer } from "../../styles/AuthBackground"
import { IAuthData } from "../../interfaces/auth.interfaces";
import { DesktopSize, FormContainer, SectionOverlay, StyledBtnContainer, StyledSection, TextContainer } from "./styled";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Form } from "../../components/form";
import { Logo } from "../../components/logo";

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

        <SectionOverlay>
          <TextContainer>
            <Logo url={"https://front.evob.dev.marcomapa.com/front_challenge/Tapttoo.png"} alt="Logo_Desktop" />
            <p>O lugar certo para encontrar a sua próxima tatuagem</p>
            <p className="second-paragraph">Descubra e siga seus tatuadores e estilos preferidos</p>
            <p>Acesse!</p>
          </TextContainer>

        </SectionOverlay>

        {/* <Logo url={"https://front.evob.dev.marcomapa.com/front_challenge/TapttooMobile.png"} alt="Logo_Mobile" /> */}

        <FormContainer>
          <Form title={"Acesse sua conta"} onSubmit={handleLogin}>
            <Input type="email" placeholder="email" value={email} onChange={handleEmail} />

            <Input type="password" placeholder="senha" value={password} onChange={handlePassword} />

            <StyledBtnContainer>
              <Button type="submit" variant="primary" text="Entrar" />
              <a href="">Esqueceu sua senha ?!</a>
            </StyledBtnContainer>
          </Form>

          <StyledSection>
            <a href="">Ainda não tem conta?</a>
            <Button variant="secondary" text="Cadastre-se" height="medium" />
          </StyledSection>
        </FormContainer>


      </StyledAuthContainer>
    </StyledAuthBackground>
  )
}