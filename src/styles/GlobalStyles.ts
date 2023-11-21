import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    line-height: 1.5;
    text-decoration: none;
  }

  body{
    font-family: 'Lato', sans-serif;
    overflow-x: hidden;
  }

  :root{
    --color-primary: #2D3748;
    --color-secondary: #4A5568;

    --color-white: #F7FAFC;
    --color-input-placeholder: #A0AEC0;

    --negative: #F56565;
  }
`;
