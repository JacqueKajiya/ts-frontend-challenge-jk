import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { StyledAuthBackground, StyledAuthContainer } from "../../styles/AuthBackground"
import { IAuthData } from "../../interfaces/auth.interfaces";
import { FormBtnContainer, FormContainer, LinkSection, LogoMobile, SectionOverlay, TextContainer } from "./styled";
import { Input, Button, Form, Logo } from "../../components";
import UserIcon from "../../assets/md-user.svg"
import PasswordIcon from "../../assets/md-lock-closed.svg"
import { INavigateProps } from "../../interfaces/navigate.interfaces";

export const Login = ({ navigateTo }: INavigateProps) => {
  const [defaultData, setDefaultData] = useState<IAuthData | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const navigate = () => {
    navigateTo();
  };

  useEffect(() => {
    fetch('https://front.evob.dev.marcomapa.com/front_challenge/info', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setDefaultData(data))
      .catch((error) => console.error('Erro ao buscar informações:', error));

  }, []);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrorMessage('')
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrorMessage('')
  }

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      const response = await fetch('https://front.evob.dev.marcomapa.com/front_challenge/login/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || data.Error) {
        setErrorMessage(data.Error || 'Erro ao fazer login');
      } else {
        console.log('Login successful');
      }
    } catch (error) {
      setErrorMessage('Algo deu errado. Por favor, tente novamente.');
    }
  };

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

        <LogoMobile>
          <Logo url={"https://front.evob.dev.marcomapa.com/front_challenge/TapttooMobile.png"} alt="Logo_Mobile" />
        </LogoMobile>

        <FormContainer>
          <Form title={"Acesse sua conta"} onSubmit={handleLogin}>
            <Input type="email" placeholder="email" value={email} onChange={handleEmail} icon={UserIcon} errors={errorMessage} />
            <Input type="password" placeholder="senha" value={password} onChange={handlePassword} icon={PasswordIcon} errors={errorMessage} />

            <FormBtnContainer>
              <Button type="submit" variant="primary" text="Entrar" />
              <a href="">Esqueceu sua senha ?!</a>
            </FormBtnContainer>
          </Form>

          <LinkSection>
            <a href="">Ainda não tem conta?</a>
            <Button variant="secondary" text="Cadastre-se" height="medium" onClick={navigate} />
          </LinkSection>
        </FormContainer>


      </StyledAuthContainer>
    </StyledAuthBackground>
  )
}