import { WEATHER } from 'config/config.json';
import weatherMock from 'services/weatherService/mock';

export default {
  weather: weatherMock,
  city: weatherMock.name,
  icon: `${WEATHER.ICON.BASE_URL}/${weatherMock.weather[0].icon}@4x.png`
};
