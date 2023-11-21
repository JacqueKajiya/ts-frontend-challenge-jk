import styled from "styled-components";
import CoverImg from "../../assets/welcomeBackground.svg";

export const StyledBtnContainer = styled.div`
  width: 100%;
  max-width: 320px;
  height: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  margin-top: 50px;

  @media(min-width: 768px){
    flex-direction: row-reverse;
    justify-content: space-between; 
    margin-top: 0;

    button{
      width: 160px;
    }

    a{
      transition: 0.3s ease;
    }

    a:hover{
      border-bottom: 3px solid;
    }
  }
`;

export const LinkSection = styled.section`
  width: 100%;
  max-width: 322px;
  height: 96px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  margin-top: 163px;

  a{
    color: var(--color-secondary);
    font-size: 14px;
    font-weight: 600;
  }

  @media (min-width: 768px){
    max-width: 320px;
    margin-top: 0;
  
    a{
      transition: 0.3s ease;
    }

    a:hover{
      border-bottom: 3px solid;
    }

    button{
      width: 180px;
    }

  }
`;

export const LogoMobile = styled.div`
  @media (min-width: 768px){
    display: none;
  }
`;

export const SectionOverlay = styled.section`

@media (min-width: 768px){
  width: 50%;
  position: relative;
  height: 720px;

  background-image: url(${CoverImg});
  background-size: cover;
  background-position: center;

  display: flex;

  &::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #1A202C;
    opacity: 0.9;
  }}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 160px;
  gap: 20px;

  z-index: 1;

  p{
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color-white);
  }

  .second-paragraph{
    opacity: 0.7;
  }

`;

export const FormContainer = styled.div`
  @media (min-width: 768px){
    width: 50%;
    height: 720px;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }
`;
