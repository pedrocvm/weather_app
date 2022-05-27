import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: rgb(0 0 0 / 80%);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: ${theme.layers.overlay};
    ${theme.flex('row', 'center', 'center')};
  `}
`;
