/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';
import theme from 'styles/theme';

export const renderWithTheme = (children: any): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
