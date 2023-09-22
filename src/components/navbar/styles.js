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
`;
export const SHeaderLogo = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const SHeaderLink = styled.a`
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
`;
export const SHeaderItem = styled.li`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;
export const SHeaderBtnSpan = styled.span`
  margin: 0 8px;
  padding: 4px 8px;
  text-transform: capitalize;
  font-weight: 500;
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
`;
export const SHeaderIconsLink = styled.a``;
