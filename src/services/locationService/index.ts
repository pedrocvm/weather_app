/* eslint-disable @typescript-eslint/no-explicit-any */
import { PositionProps, ResultRequestProps } from './types';
import Geocode from 'react-geocode';
import { MAPS } from 'config/config.json';

Geocode.setApiKey(MAPS.API_KEY);

class LocationService {
  async getCity({ lat, lng }: PositionProps): Promise<any> {
    return await Geocode.fromLatLng(lat.toString(), lng.toString()).then(
      (response: ResultRequestProps) => {
        let city;

        response.results.forEach((result) => {
          result.address_components.forEach((address_component) => {
            address_component.types.forEach((type) => {
              if (type === 'locality') {
                city = address_component.long_name;
              }
            });
          });
        });

        return city;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

export default new LocationService();
