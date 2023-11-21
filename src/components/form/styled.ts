import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  max-width: 375px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding: 76px 0;

  header{
    width: 100%;
  }

  h1{
    font-weight: 300;
    font-size: 36px;
    padding: 0 48px;

    color: var(--color-primary);
  }

  a{
    color: var(--color-secondary);
    font-size: 14px;
    font-weight: 600;
    border-bottom: 1px solid var(--color-secondary);
  }

  @media (min-width: 768px) {
    max-width: 100%;
    padding: 0;

    header{
      display: flex;
      justify-content: center;
    }
  }

`;
