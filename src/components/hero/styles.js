import styled from 'styled-components';
import * as variables from '../../styles/variables';
import background from '../../assets/images/model3.png';

export const SHeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const SHeroTitleContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  padding: 0 24px;
  margin-top: 18vh;
`;
export const SHeroTitle = styled.h1`
  font-size: 40px;
`;
export const SHeroPara = styled.p`
  font-size: 20px;
  text-transform: capitalize;
`;
export const SHeroSmall = styled.small`
  font-size: 12px;
  text-transform: capitalize;
`;
export const SHeroBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 24px 16px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${variables.query.sm} {
    width: 100%;
  }
`;
export const SHeroButtons = styled.div`
  width: 600px;
  padding: 24px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  justify-content: center;
  grid-gap: 16px 24px;
  @media ${variables.query.md} {
    width: 400px;
  }
  @media ${variables.query.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }
`;
export const SHeroMessage = styled.p`
  font-size: 12px;
  cursor: pointer;
  box-shadow: 0 1px 0 0 ${variables.colors.grey};
  transition: all 0.33s ease-in-out;
  &:hover {
    box-shadow: 0 2px 0 0 ${variables.colors.grey};
  }
`;
