import React, { useContext } from 'react';
import { LoadContext } from 'context/LoadContext';
import useWeather from 'hooks/useWeather';
import Preloader from 'components/utils/Preloader';
import * as S from './styles';

export enum WeatherUnitEnum {
  CELSIUS = 'metric',
  FAHRENHEIT = 'imperial'
}

export type WeatherDisplayProps = {
  unit: WeatherUnitEnum;
};

const WeatherDisplay = ({ unit }: WeatherDisplayProps) => {
  const { weather, icon } = useWeather(unit);
  const { isLoading } = useContext(LoadContext);

  return (
    <>
      {isLoading ? (
        <S.PreloaderOverlay>
          <Preloader />
        </S.PreloaderOverlay>
      ) : (
        <S.Wrapper>
          <S.Name>
            {weather.name}, {weather.sys.country}
          </S.Name>
          <S.WeatherWrapper>
            <S.TemperatureDescription>
              {Math.round(weather.main.temp)} °
              {unit === WeatherUnitEnum.CELSIUS ? 'C' : 'F'}
            </S.TemperatureDescription>

            <S.WeatherDescription>
              {weather.weather[0].description}
              <S.Icon>
                <img src={icon} alt="Weather Icon" aria-label="weather icon" />
              </S.Icon>
            </S.WeatherDescription>
          </S.WeatherWrapper>

          <S.SunriseAndSunsetWrapper>
            <div>
              <S.Label>Sunrise: </S.Label>
              {weather.sys.formattedSunrise}
            </div>

            <div>
              <S.Label>Sunset: </S.Label>
              {weather.sys.formattedSunset}
            </div>
          </S.SunriseAndSunsetWrapper>
        </S.Wrapper>
      )}
    </>
  );
};

export default WeatherDisplay;
