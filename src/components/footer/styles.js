import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const SFooterContainer = styled.footer`
  padding: 0 24px;
  color: ${(props) =>
    props.isNegative ? variables.colors.white : variables.colors.grey};
  font-size: 12px;
  inline-size: 100%;
  display: flex;
  flex-flow: row nowrap;
  background-color: transparent;
  height: 70px;
  position: absolute;
  left: 0;
  bottom: 0;
`;
export const SFooterNav = styled.nav`
  flex-flow: column;
  display: flex;
  justify-content: center;
  align-items: center;
  inline-size: 100%;
`;
export const SFooterList = styled.ul`
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  display: flex;
  width: fit-content;
  margin: 0 auto;
  line-height: 20px;
`;
export const SFooterListItem = styled.li`
  padding: 4px 0;
  margin-right: 14px;
  text-transform: capitalize;
`;
export const SFooterListItemLink = styled.a``;
