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
`;

export const StyledSection = styled.section`
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
    max-width: 100%;
    margin-top: 0;
  }
`;

export const DesktopSize = styled.div`
  width: 50%;
`;

export const SectionOverlay = styled.section`
  position: relative;

  background-image: url(${CoverImg});
  background-size: cover;
  background-position: center;

  &::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #1A202C;
    opacity: 0.9;
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
