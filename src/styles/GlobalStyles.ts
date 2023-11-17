import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Lato', sans-serif;
  }

  button{
    cursor: pointer;
  }

  body{
    padding: 0 1rem;
  }

  :root{
    --color-primary: #2D3748;
    --color-secondary: #4A5568;

    --color-white: #F7FAFC;
    --color-input-placeholder: #A0AEC0;

    --negative: #F56565;
  }
`;
