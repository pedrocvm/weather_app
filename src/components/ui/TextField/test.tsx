import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import TextField, { TextFieldProps } from '.';

const props: TextFieldProps = {
  onClear: jest.fn()
};

describe('<TextField />', () => {
  it('should render placeholder', () => {
    renderWithTheme(<TextField {...props} placeholder="text field" />);

    expect(screen.getByPlaceholderText(/text field/i)).toBeInTheDocument();
  });

  it('Should changes value when typing', async () => {
    const onInput = jest.fn();
    renderWithTheme(<TextField {...props} onInput={onInput} />);

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });
  });

  it('Should render a disabled input', async () => {
    const onInput = jest.fn();

    renderWithTheme(<TextField {...props} onInput={onInput} disabled />);

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });

    expect(onInput).not.toHaveBeenCalled();
  });

  it('Should render a input accessible by tab', () => {
    renderWithTheme(<TextField {...props} />);

    const input = screen.getByRole('textbox');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('Should render a input not accessible by tab when disabled', () => {
    renderWithTheme(<TextField {...props} disabled />);

    const input = screen.getByRole('textbox');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });

  it('Should clear input when clear button is clicked', async () => {
    renderWithTheme(<TextField {...props} />);

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    const button = screen.getByLabelText(/clear button/i);

    userEvent.type(input, text);
    userEvent.click(button);
    expect(props.onClear).toHaveBeenCalled();
  });
});
