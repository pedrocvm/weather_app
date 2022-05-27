import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import * as useWeather from 'hooks/useWeather';
import { WEATHER } from 'config/config.json';
import weatherMock from './mock';

import WeatherDisplay, { WeatherDisplayProps, WeatherUnitEnum } from '.';

const props: WeatherDisplayProps = {
  unit: WeatherUnitEnum.CELSIUS
};

describe('<WeatherDisplay />', () => {
  beforeEach(() => {
    jest.spyOn(useWeather, 'default').mockImplementationOnce(() => weatherMock);
  });

  it('should render city name', () => {
    renderWithTheme(<WeatherDisplay {...props} />);

    expect(screen.getByText(/Lisbon, PT/i)).toBeInTheDocument();
  });

  it('should render weather data and icon', () => {
    renderWithTheme(<WeatherDisplay {...props} />);

    expect(screen.getByText(/15 °C/i)).toBeInTheDocument();
    expect(screen.getByText(/scattered clouds/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /weather icon/i })).toHaveAttribute(
      'src',
      `${WEATHER.ICON.BASE_URL}/03n@4x.png`
    );
  });

  it('should render sunrise and sunset data', () => {
    renderWithTheme(<WeatherDisplay {...props} />);

    expect(screen.getByText(/sunrise/i)).toBeInTheDocument();
    expect(screen.getByText(/05:30 am/i)).toBeInTheDocument();
    expect(screen.getByText(/sunset/i)).toBeInTheDocument();
    expect(screen.getByText(/18:40 pm/i)).toBeInTheDocument();
  });
});
