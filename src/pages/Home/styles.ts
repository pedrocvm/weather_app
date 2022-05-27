import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const QueryWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex('column', 'unset', 'unset', theme.spacings.xsmall)}
    width: 100%;
    margin-top: ${theme.spacings.xsmall};
  `}
`;

export const WeatherDisplayWrapper = styled.div``;
