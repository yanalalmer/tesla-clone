import React from 'react';
// components
import { Button } from '../../components';
// styles
import {
  SHeroContainer,
  SHeroTitleContainer,
  SHeroTitle,
  SHeroPara,
  SHeroSmall,
  SHeroBottom,
  SHeroButtons,
  SHeroMessage,
} from './styles';

const Hero = ({ car }) => {
  return (
    <SHeroContainer background={car.backgroundImg}>
      <SHeroTitleContainer>
        <SHeroTitle>{car.title}</SHeroTitle>
        <SHeroPara>From {car.price}</SHeroPara>
        <SHeroSmall>after federal tax credit & est. gas savings</SHeroSmall>
      </SHeroTitleContainer>
      <SHeroBottom>
        <SHeroButtons>
          <Button isNegative text='order now' />
          <Button text='demo drive' />
        </SHeroButtons>
        <a href='/'>
          <SHeroMessage>More information about Tesla for Buisness</SHeroMessage>
        </a>
      </SHeroBottom>
    </SHeroContainer>
  );
};

export default Hero;