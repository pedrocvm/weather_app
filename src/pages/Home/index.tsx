import React, { useState } from 'react';
import Autocomplete from 'components/ui/Autocomplete';
import { Container } from 'components/structure/Container';
import Toggle from 'components/ui/Toggle';
import WeatherDisplay, { WeatherUnitEnum } from 'components/ui/WeatherDisplay';

import * as S from './styles';

const Home = () => {
  const [unit, setUnit] = useState(WeatherUnitEnum.CELSIUS);

  const handleUnitChange = (checked: boolean) => {
    checked
      ? setUnit(WeatherUnitEnum.CELSIUS)
      : setUnit(WeatherUnitEnum.FAHRENHEIT);
  };

  return (
    <Container>
      <S.QueryWrapper>
        <Autocomplete />
        <Toggle leftLabel="°C" rightLabel="°F" onToggle={handleUnitChange} />
      </S.QueryWrapper>

      <S.WeatherDisplayWrapper>
        <WeatherDisplay unit={unit} />
      </S.WeatherDisplayWrapper>
    </Container>
  );
};

export default Home;
