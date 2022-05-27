import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Toggle, { ToggleProps } from '.';
import userEvent from '@testing-library/user-event';

const props: ToggleProps = {
  leftLabel: 'Celsius',
  rightLabel: 'Fahrenheit',
  onToggle: jest.fn()
};

describe('<Toggle />', () => {
  it('should render left label', () => {
    renderWithTheme(<Toggle {...props} />);

    expect(screen.getByText(props.leftLabel!)).toBeInTheDocument();
  });

  it('should render right label', () => {
    renderWithTheme(<Toggle {...props} />);

    expect(screen.getByText(props.rightLabel!)).toBeInTheDocument();
  });

  it('should call onToggle and move toggle cursor when click', () => {
    renderWithTheme(<Toggle {...props} />);

    const toggleCursor = screen.getByLabelText(/toggle cursor/i);

    userEvent.click(toggleCursor);

    expect(toggleCursor).toHaveStyle({
      transform: 'translateX(100%)'
    });

    expect(props.onToggle).toHaveBeenCalled();
  });
});
