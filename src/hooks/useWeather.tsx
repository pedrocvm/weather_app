import { useState, useContext, useEffect } from 'react';
import moment from 'moment';
import { WeatherUnitEnum } from 'components/ui/WeatherDisplay';
import WeatherService from 'services/weatherService';
import WeatherMock from 'services/weatherService/mock';
import { WeatherRequestProps } from 'services/weatherService/types';
import { CityContext } from 'context/CityContext';
import { LoadContext } from 'context/LoadContext';

export default function useWeather(unit: WeatherUnitEnum) {
  const [weather, setWeather] = useState<WeatherRequestProps>(WeatherMock);
  const [icon, setIcon] = useState('');
  const { city } = useContext(CityContext);
  const { setIsLoading } = useContext(LoadContext);

  useEffect(() => {
    if (city) {
      setIsLoading(true);
      WeatherService.get(city, unit)
        .then((res) => {
          const {
            sys: { sunrise, sunset },
            timezone
          } = res.data;

          res.data.sys.formattedSunrise = moment
            .utc(sunrise, 'X')
            .add(timezone, 'seconds')
            .format('HH:mm a');

          res.data.sys.formattedSunset = moment
            .utc(sunset, 'X')
            .add(timezone, 'seconds')
            .format('HH:mm a');

          setWeather(res.data);
        })
        .finally(() => setIsLoading(false));
    }
  }, [city, unit, setIsLoading]);

  useEffect(() => {
    setIcon(WeatherService.getIcon(weather.weather[0].icon));
  }, [weather.weather]);

  return { weather, city, icon };
}
