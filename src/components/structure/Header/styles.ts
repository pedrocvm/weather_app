import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkGray};
    padding: ${theme.spacings.xsmall};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xxlarge};
    text-align: center;
  `}
`;
