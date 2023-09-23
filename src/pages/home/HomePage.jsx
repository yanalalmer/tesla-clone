import React from 'react';
import model3 from '../../assets/images/model3.png';
import modely from '../../assets/images/modely.png';
import models from '../../assets/images/models.png';
import modelx from '../../assets/images/modelx.png';
// components
import { Hero } from '../../components';

const HomePage = () => {
  return (
    <>
      {cars.map((car, index) => (
        <Hero key={index} car={car} />
      ))}
    </>
  );
};

export default HomePage;

const cars = [
  {
    title: 'model 3',
    price: '$29,740*',
    backgroundImg: model3,
  },
  {
    title: 'Model Y',
    price: '$39,390*',
    backgroundImg: modely,
  },
  {
    title: 'model s',
    price: '$71,090*',
    backgroundImg: models,
  },
  {
    title: 'model x',
    price: '$68,590*',
    backgroundImg: modelx,
  },
];
