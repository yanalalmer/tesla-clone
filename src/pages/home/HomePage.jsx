import React from 'react';
import styled from 'styled-components';
// images
import model3 from '../../assets/images/model3.png';
import modely from '../../assets/images/modely.png';
import models from '../../assets/images/models.png';
import modelx from '../../assets/images/modelx.png';
import solarpanels from '../../assets/images/solarpanels.png';
import solarroof from '../../assets/images/solarroof.png';
import powerwall from '../../assets/images/powerwall.png';
import accessories from '../../assets/images/accessories.png';
// components
import { Hero } from '../../components';

const Container = styled.div`
  scroll-snap-type: y mandatory;
  max-height: 100vh;
  overflow-y: scroll;
`;

const HomePage = () => {
  return (
    <Container>
      {data.map((item, index) => (
        <Hero key={index} item={item} />
      ))}
    </Container>
  );
};

export default HomePage;

const data = [
  {
    title: 'model 3',
    para: 'from $29,740*',
    backgroundImg: model3,
    small: 'after federal tax credit & est. gas savings',
    price:
      '*Price before incentives and savings is $40,240, excluding taxes and fees. Subject to change.',
    message: 'Learn about est. gas savings.',
    btn1: 'order now',
    btn2: 'demo drive',
  },
  {
    title: 'Model Y',
    para: 'from $39,390*',
    backgroundImg: modely,
    small: 'after federal tax credit & est. gas savings',
    price:
      '*Price before incentives and savings is $50,490, excluding taxes and fees. Subject to change.',
    message: 'Learn about est. gas savings.',
    btn1: 'order now',
    btn2: 'demo drive',
  },
  {
    title: 'model s',
    para: 'from $71,090*',
    backgroundImg: models,
    small: 'after federal tax credit & est. gas savings',
    price:
      '*Price before savings is $74,990, excluding taxes and fees. Subject to change.',
    message: 'Learn about est. gas savings.',
    btn1: 'order now',
    btn2: 'demo drive',
  },
  {
    title: 'model x',
    para: 'from $68,590*',
    backgroundImg: modelx,
    small: 'after federal tax credit & est. gas savings',
    price:
      '*Price before incentives and savings is $79,990, excluding taxes and fees. Subject to change.',
    message: 'Learn about est. gas savings.',
    btn1: 'order now',
    btn2: 'demo drive',
  },
  {
    title: 'solar panels',
    backgroundImg: solarpanels,
    small: 'Schedule a Virtual Consultation',
    btn1: 'order now',
    btn2: 'learn more',
  },
  {
    title: 'solar roof',
    backgroundImg: solarroof,
    small: 'Produce Clean Energy From Your Roof',
    btn1: 'order now',
    btn2: 'learn more',
  },
  {
    title: 'Powerwall',
    backgroundImg: powerwall,
    btn1: 'order now',
    btn2: 'learn more',
  },
  {
    title: 'Accessories',
    backgroundImg: accessories,
    btn1: 'shop now',
    btn2: 'learn more',
  },
];
