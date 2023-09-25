import React from 'react';
import styled from 'styled-components';
import * as variables from '../styles/variables';

const SContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${variables.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #393c41;
`;
const STitle = styled.h1`
  font-size: 47px;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
  font-weight: 300;
`;
const SSubtitle = styled.h3`
  font-size: 27px;
  width: 100%;
  text-align: center;
  font-weight: 300;
`;

const NoPage = () => {
  return (
    <SContainer>
      <STitle>404</STitle>
      <SSubtitle>Page not found</SSubtitle>
    </SContainer>
  );
};

export default NoPage;
