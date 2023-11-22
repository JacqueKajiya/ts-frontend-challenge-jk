import styled from "styled-components";

export const LoginLink = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 30px;

  a{
    color: var(--color-secondary);
    font-size: 14px;
    font-weight: 600;
  }

  button{
      width: 180px;
      height: 40px;
      font-weight: 600;
      border: 2px solid;
    }

  @media (min-width: 768px){
    max-width: 320px;
    height: 100%;

    margin-top: 0;

    a{
      transition: 0.3s ease;
    }

    a:hover{
      border-bottom: 3px solid;
    }

  }

`;
