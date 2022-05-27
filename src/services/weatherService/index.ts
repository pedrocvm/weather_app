import config from 'config/config.json';
import apiService from 'services/apiService';
import { WeatherUnitEnum } from 'components/ui/WeatherDisplay';
import { WeatherRequestProps } from './types';

class WeatherService {
  get(
    city: string,
    unit: WeatherUnitEnum
  ): Promise<{ data: WeatherRequestProps }> {
    return apiService.get({
      baseURL: config.WEATHER.BASE_URL,
      params: { appid: config.WEATHER.API_KEY, q: city, units: unit }
    });
  }

  getIcon(icon: string) {
    return `${config.WEATHER.ICON.BASE_URL}/${icon}@4x.png`;
  }
}

export default new WeatherService();
