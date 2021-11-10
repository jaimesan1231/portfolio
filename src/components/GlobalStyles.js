import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  :root{
    --header-height:6rem;
    --body-color: #212121;
    --padding-page:1rem;
    --section-height:calc(100vh - var(--header-height));
    --text-color:white; 
    --main-color:#6C63FF;
  }
  body{
    background: var(--body-color);
    color: var(--text-color);
  }
`;
