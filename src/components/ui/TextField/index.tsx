import React, { forwardRef, InputHTMLAttributes } from 'react';
import { Close } from '@styled-icons/material/Close';

import * as S from './styles';

export type TextFieldProps = {
  onClear: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TextFieldProps
> = ({ onChange, value, name, onClear, ...props }: TextFieldProps, ref) => {
  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Input
          onChange={onChange}
          value={value}
          name={name}
          autoComplete="off"
          ref={ref}
          {...props}
        />

        <S.ClearButton onClick={() => onClear()} aria-label="clear button">
          <Close />
        </S.ClearButton>
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default forwardRef(TextField);
