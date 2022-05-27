import React from 'react';
import { renderWithTheme } from 'utils/tests/helpers';

import Preloader from '.';

describe('<Preloader />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Preloader />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
