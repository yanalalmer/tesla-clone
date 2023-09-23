import React from 'react';
// styles
import { SButton } from './styles';

const Button = (props) => {
  return (
    <SButton
      negative={props.isNegative}
      onClick={props.onclick ? props.onclick : null}
    >
      {props.text}
    </SButton>
  );
};

export default Button;
