import styled, { css, DefaultTheme } from 'styled-components';

const OptionModifiers = {
  active: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.darkGray};
    color: ${theme.colors.white};
  `
};

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const OptionsWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    position: absolute;
    width: 100%;
    margin: 0 auto;
    z-index: ${theme.layers.base};
  `}
`;

export const Option = styled.article<{ active?: boolean }>`
  ${({ theme, active }) => css`
    padding: ${theme.spacings.xxsmall};

    ${active && OptionModifiers.active(theme)}
  `}
`;

export const Error = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.red};
    color: ${theme.colors.white};
    border-radius: 0.2rem;
    padding: ${theme.spacings.tiny} ${theme.spacings.small};
  `}
`;
