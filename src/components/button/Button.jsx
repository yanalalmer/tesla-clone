import React from 'react';
// styles
import { SButton } from './styles';

const Button = ({ isnegative, onclick, text }) => {
  return (
    <SButton isnegative={isnegative} onClick={onclick}>
      {text}
    </SButton>
  );
};

export default Button;
