import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    ${theme.flex('row', 'center', 'flex-end', theme.spacings.xxsmall)}
  `}
`;

export const ToggleWrapper = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray};
    height: 1.6rem;
    width: 3.2rem;
    ${theme.flex('row', 'center', 'unset')}
    border-radius: 5rem;
    cursor: pointer;
    outline: none;
    border: none;
  `}
`;

export const ToggleCursor = styled.div<{ checked: boolean }>`
  ${({ theme, checked }) => css`
    background-color: ${theme.colors.orange};
    height: 1.8rem;
    width: 1.8rem;
    border-radius: 50%;
    transition: ${theme.transition.fast};
    transform: ${checked ? ' translateX(100%)' : 'translateX(-10%)'};
  `}
`;

export const Label = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
  `}
`;
