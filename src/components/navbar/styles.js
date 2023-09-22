import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const SHeader = styled.header`
  z-index: 10;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  height: ${variables.spacing.headerHeight};
  background-color: transparent;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
`;
export const SHeaderLogo = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const SHeaderLink = styled.a`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  min-block-size: 32px;
  margin: 0 16px;
`;
export const SHeaderImg = styled.img`
  width: 120px;
`;
export const SHeaderMenu = styled.ol`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media ${variables.query.xl} {
    background-color: ${variables.colors.white};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 499;
    display: flex;
    flex-direction: column;
    align-items: normal;
    padding: 0 18px;
  }
`;
export const SMobileOnly = styled.div`
  display: none;
  @media ${variables.query.xl} {
    display: block;
    img {
      width: 24px;
      height: 24px;
      padding: 0;
      margin-right: 8px;
    }
    li {
      justify-content: initial;
    }
    span:nth-child(2) {
      padding: 0;
      margin: 0;
    }
  }
`;
export const SHeaderCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  position: absolute;
  right: 20px;
  top: 20px;
  svg {
    width: 24px;
    height: 24px;
  }
`;
export const SHeaderArrow = styled.img`
  display: none;
  @media ${variables.query.xl} {
    display: block;
    width: 16px;
    height: 16px;
  }
`;
export const SHeaderBtnSpan = styled.span`
  margin: 0 8px;
  padding: 8px 10px;
  border-radius: 4px;
  text-transform: capitalize;
  font-weight: 500;
  transition: all 0.33s ease-in-out;
  @media ${variables.query.xl} {
    font-size: 17px;
    padding: 0;
    margin: 0;
  }
`;
export const SHeaderIconsMenu = styled.ol`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  height: fit-content;
`;
export const SHeaderIcon = styled.img`
  width: 36px;
  height: 36px;
  padding: 4px 8px;
  transition: all 0.33s ease-in-out;
  &:hover {
    background-color: ${variables.colors.lightGrey};
  }
`;
export const SHeaderIconsLink = styled.a`
  cursor: pointer;
`;
export const SHeaderItem = styled.li`
  cursor: pointer;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  @media ${variables.query.xl} {
    text-align: left;
    inline-size: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    padding: 16px 8px;
  }
  &:hover ${SHeaderBtnSpan} {
    background-color: ${variables.colors.lightGrey};
  }
`;
