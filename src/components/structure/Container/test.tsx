import React from 'react';
import { renderWithTheme } from 'utils/tests/helpers';

import { Container } from '.';

describe('<Container />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Weather app</span>
      </Container>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 76.8rem;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        padding: 1.6rem 4.0rem;
      }

      <div
        class="c0"
      >
        <span>
          Weather app
        </span>
      </div>
    `);
  });
});
