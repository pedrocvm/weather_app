import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import Header from 'components/structure/Header';
import Content from 'components/structure/Content';
import CityContextProvider from 'context/CityContext';
import LoadContextProvider from 'context/LoadContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadContextProvider>
        <CityContextProvider>
          <GlobalStyles />
          <Header />
          <Content />
        </CityContextProvider>
      </LoadContextProvider>
    </ThemeProvider>
  );
}

export default App;
