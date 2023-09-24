import React from 'react';
// styles
import { SButton } from './styles';

const Button = ({ isNegative, onclick, text }) => {
  return (
    <SButton isNegative={isNegative} onClick={onclick}>
      {text}
    </SButton>
  );
};

export default Button;
