import { useState, ChangeEvent, FormEvent } from "react";
import { Button, Form, Input, Logo } from "../../components"
import { INavigateProps } from "../../interfaces/navigate.interfaces"
import { StyledAuthBackground, StyledAuthContainer } from "../../styles/AuthBackground"
import { FormContainer, LogoMobile, SectionOverlay, TextContainer } from "../loginPage/styled"
import UserIcon from "../../assets/md-user.svg"
import PasswordIcon from "../../assets/md-lock-closed.svg"
import MailIcon from "../../assets/md-mail.svg"
import { LoginLink } from "./styled";

export const Register = ({ navigateTo }: INavigateProps) => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
  const [errors, setErrors] = useState<string[]>([]);

  const navigate = () => {
    navigateTo()
  }

  const validateEmail = (inputEmail: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const handleUsername = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value)
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setValidEmail(validateEmail(inputEmail));
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const newErrors: string[] = [];

    if (!username || !email || !password || !confirmPassword) {
      newErrors.push('Por favor, preencha todos os campos')
    }

    if (!validEmail) {
      newErrors.push('Insira um e-mail válido')
    }

    if (!passwordMatch) {
      newErrors.push('As senhas não coincidem')
    }

    if (validEmail && passwordMatch) {
      console.log('Confirm password')
    } else {
      console.error('Formulário inválido!')
    }
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

        <LogoMobile>
          <Logo url={"https://front.evob.dev.marcomapa.com/front_challenge/TapttooMobile.png"} alt="Logo_Mobile" />
        </LogoMobile>

        <FormContainer>
          <Form title={"Criar nova conta"} onSubmit={handleSubmit}>

            <Input type="text" placeholder="username" value={username} onChange={handleUsername} icon={UserIcon} errors={errors.filter((error) => error.includes('username'))} />

            <Input type="email" placeholder="email" value={email} onChange={handleEmail} icon={MailIcon} errors={errors.filter((error) => error.includes('email'))} />

            <Input type="password" placeholder="senha" value={password} onChange={handlePassword} icon={PasswordIcon} errors={errors.filter((error) => error.includes('password'))} />

            <Input type="password" placeholder="confirme sua senha" value={confirmPassword} onChange={handleConfirmPassword} icon={PasswordIcon} errors={errors.filter((error) => error.includes('confirm'))} />

          </Form>

          <LoginLink>
            <a href="">Já tem uma conta?</a>
            <Button variant="secondary" text="Acesse sua conta" height="medium" onClick={navigate} />
          </LoginLink>
        </FormContainer>


      </StyledAuthContainer>
    </StyledAuthBackground>
  )
}