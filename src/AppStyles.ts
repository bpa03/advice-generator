import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --cyan: hsl(93, 38%, 86%);
    --green: hsl(150, 100%, 66%);
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
`;

export default GlobalStyles;
