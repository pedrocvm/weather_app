export type WeatherRequestProps = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherProps[];
  base: string;
  main: MainProps;
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: SysProps;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type WeatherProps = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type MainProps = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type SysProps = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
  formattedSunrise?: string;
  formattedSunset?: string;
};
