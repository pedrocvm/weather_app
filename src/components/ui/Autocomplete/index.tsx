import React, { useState, useContext, useRef } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import locationService from 'services/locationService';
import TextField from 'components/ui/TextField';
import { CityContext } from 'context/CityContext';

import * as S from './styles';

const Autocomplete = () => {
  const [address, setAddress] = useState('');
  const addressRef = useRef<HTMLInputElement>(null);
  const { city, setCity } = useContext(CityContext);

  const handleSelect = async (value: string) => {
    if (value) {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setAddress(value);

      setCity(await locationService.getCity(latLng));
    }
  };

  return (
    <S.Wrapper>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <TextField
              {...getInputProps({ placeholder: 'Type address' })}
              onClear={() => {
                setAddress('');
                setCity('Lisbon');
                addressRef.current?.focus();
              }}
              autoFocus
              ref={addressRef}
            />

            <S.OptionsWrapper arial-label="suggestions wrapper">
              {loading ? <S.Option>loading...</S.Option> : null}

              {suggestions.map((suggestion) => (
                <S.Option
                  {...getSuggestionItemProps(suggestion)}
                  key={suggestion.description}
                  active={suggestion.active}
                >
                  {suggestion.description}
                </S.Option>
              ))}
            </S.OptionsWrapper>
          </>
        )}
      </PlacesAutocomplete>
      {typeof city === 'undefined' && <S.Error>Weather not available</S.Error>}
    </S.Wrapper>
  );
};

export default Autocomplete;
