import React from 'react';
// styles
import { SButton } from './styles';

const Button = ({ negative, text }) => {
  return <SButton negative={negative}>{text}</SButton>;
};

export default Button;
