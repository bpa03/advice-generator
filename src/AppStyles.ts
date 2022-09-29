import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --cyan: hsl(93, 38%, 86%);
    --green: hsl(150, 100%, 66%);
    --white: #CEE3E9;
    --grayish-blue: hsl(217, 19%, 38%);
    --dark-grayish-blue: hsl(217, 19%, 24%);
    --dark-blue: hsl(218, 23%, 16%);
    --font-manrope: 'Manrope', sans-serif;
  }

  html {
    box-sizing: border-box;
    font-family: var(--font-manrope);
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  * {
    margin:0;
    padding:0;
  }

  body {
    background-color: var(--dark-blue);
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
  }
`;

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default GlobalStyles;
