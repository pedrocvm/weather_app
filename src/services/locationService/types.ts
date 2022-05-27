export type PositionProps = {
  lat: number;
  lng: number;
};

export type GeolocationPosition = {
  readonly coords: GeolocationCoordinates;
  readonly timestamp: number;
};

type GeolocationCoordinates = {
  readonly accuracy: number;
  readonly altitude: number | null;
  readonly altitudeAccuracy: number | null;
  readonly heading: number | null;
  readonly latitude: number;
  readonly longitude: number;
  readonly speed: number | null;
};

export type ResultRequestProps = {
  plus_code: PlusCodeProps;
  results: ResultsProps[];
  status: string;
};

export type ResultsProps = {
  address_components: AddressComponentProps[];
  formatted_address: string;
  geometry: GeometryProps;
  place_id: string;
  plus_code: PlusCodeProps;
  types: string[];
};

type PlusCodeProps = {
  compound_code: string;
  global_code: string;
};

type AddressComponentProps = {
  long_name: string;
  short_name: string;
  types: string[];
};

type GeometryProps = {
  location: {
    lat: number;
    lng: number;
  };
  location_type: string;
  viewport: {
    northeast: {
      lat: number;
      lng: number;
    };
    southwest: {
      lat: number;
      lng: number;
    };
  };
};
