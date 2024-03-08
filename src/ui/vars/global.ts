import { createGlobalStyle } from 'styled-components';
import colorVariables from './colorVars';

export const GlobalStyles = createGlobalStyle`
 :root {
    ${colorVariables};
  };

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
`;
