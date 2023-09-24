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

const Hero = ({ item }) => {
  const { backgroundImg, title, para, small, price, btn1, btn2, message } =
    item;
  return (
    <SHeroContainer background={backgroundImg}>
      <SHeroTitleContainer>
        <SHeroTitle>{title ? title : ''}</SHeroTitle>
        <SHeroPara>{para ? para : ''}</SHeroPara>
        <SHeroSmall>{small ? small : ''}</SHeroSmall>
      </SHeroTitleContainer>
      <SHeroBottom>
        <SHeroButtons>
          <Button isNegative text={btn1} />
          <Button text={btn2} />
        </SHeroButtons>
        <SHeroSmall>{price ? price : ''}</SHeroSmall>
        <a href='/'>
          <SHeroMessage>{message ? message : ''}</SHeroMessage>
        </a>
      </SHeroBottom>
    </SHeroContainer>
  );
};

export default Hero;
