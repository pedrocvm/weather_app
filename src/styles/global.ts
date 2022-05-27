/* eslint-disable @typescript-eslint/ban-types */
import {
  createGlobalStyle,
  css,
  GlobalStyleComponent,
  DefaultTheme
} from 'styled-components';

type GlobalStylesProps = {};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  #root{
    height: 100%;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      height: 100vh;
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.midGray};
    }
  `}

`;

export default GlobalStyles;
