import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 76.8rem;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding: ${theme.spacings.xsmall} ${theme.spacings.large};
  `}
`;
