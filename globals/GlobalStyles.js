import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

a {
  text-decoration: none;
}

html{
  height: 100%;
}

body{
  min-height:100%;
  font-family: 'Roboto', sans-serif;
  background: hsl(229.7,74.4%,69.4%, 0.2);
}

`;

export default GlobalStyles;
