import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Header from '.';

describe('<Header />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Header />);

    expect(screen.getByRole('heading', { name: 'Weather app' }));
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        background-color: #455A64;
        padding: 1.6rem;
      }

      .c1 {
        color: #FFF;
        font-weight: 400;
        font-size: 2.2rem;
        text-align: center;
      }

      <div
        class="c0"
      >
        <h1
          class="c1"
        >
          Weather app
        </h1>
      </div>
    `);
  });
});
