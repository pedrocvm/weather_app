import React, { useState } from 'react';
import * as S from './styles';

export type ToggleProps = {
  leftLabel?: string;
  rightLabel?: string;
  onToggle: (status: boolean) => void;
};

const Toggle = ({ leftLabel, rightLabel, onToggle }: ToggleProps) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
    onToggle(checked);
  };

  return (
    <S.Wrapper onClick={handleToggle} aria-label="toggle temperature button">
      {!!leftLabel && <S.Label>{leftLabel}</S.Label>}
      <S.ToggleWrapper>
        <S.ToggleCursor checked={checked} aria-label="toggle cursor" />
      </S.ToggleWrapper>
      {!!rightLabel && <S.Label>{rightLabel}</S.Label>}
    </S.Wrapper>
  );
};

export default Toggle;
