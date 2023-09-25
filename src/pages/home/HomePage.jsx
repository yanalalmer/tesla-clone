import React from 'react';
import styled from 'styled-components';
import { sections } from '../../data';
// components
import { Hero } from '../../components';

const Container = styled.div`
  scroll-snap-type: y mandatory;
  max-height: 100vh;
  overflow-y: scroll;
`;

const HomePage = () => {
  return (
    <>
      <Container>
        {sections.map((item, index) => (
          <Hero key={index} item={item} />
        ))}
      </Container>
    </>
  );
};

export default HomePage;
