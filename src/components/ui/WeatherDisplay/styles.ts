import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex('column', 'center', 'space-between', theme.spacings.small)}
  `}
`;

export const Name = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 4rem;
    text-align: center;
    padding: ${theme.spacings.xsmall} 0 ${theme.spacings.xsmall};
    font-weight: ${theme.font.bold};
  `}
`;

export const WeatherWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    ${theme.flex('column', 'center', 'center', theme.spacings.xsmall)}
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};
  `}
`;

export const WeatherDescription = styled.div`
  ${({ theme }) => css`
    ${theme.flex('column', 'center', 'center')}
    font-size: 3rem;
  `}
`;

export const TemperatureDescription = styled.h2`
  ${({ theme }) => css`
    font-size: 10rem;
    font-weight: ${theme.font.normal};
    text-align: center;

    @media (max-width: 315px) {
      font-size: 7rem;
    }
  `}
`;

export const Icon = styled.div`
  > img {
    width: 10rem;
    height: 10rem;
  }
`;

export const SunriseAndSunsetWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.flex('row', 'center', 'space-between', theme.spacings.xxsmall)}
    flex-wrap: wrap;
    width: 100%;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};

    > div {
      text-align: center;

      @media (max-width: 396px) {
        width: 100%;
      }
    }
  `}
`;

export const Label = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
  `}
`;

export const PreloaderOverlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: ${theme.layers.overlay};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  `}
`;
