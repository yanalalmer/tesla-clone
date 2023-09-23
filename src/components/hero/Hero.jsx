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

const Hero = () => {
  return (
    <SHeroContainer>
      <SHeroTitleContainer>
        <SHeroTitle>Model 3</SHeroTitle>
        <SHeroPara>From $39,390*</SHeroPara>
        <SHeroSmall>after federal tax credit & est. gas savings</SHeroSmall>
      </SHeroTitleContainer>
      <SHeroBottom>
        <SHeroButtons>
          <Button negative text='order now' />
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
