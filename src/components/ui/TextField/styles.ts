import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex('row', 'center', 'unset')}
    background: ${theme.colors.white};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-right: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`;

export const Wrapper = styled.div``;

export const ClearButton = styled.button`
  ${({ theme }) => css`
    ${theme.flex('row', 'center', 'center')};
    border: none;
    outline: none;
    background: none;
    cursor: pointer;

    > svg {
      height: 2rem;
      width: 2rem;
      color: ${theme.colors.gray};
    }
  `}
`;
