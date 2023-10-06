import React from 'react';
import { footerList } from '../../data';
// styles
import {
  SFooterContainer,
  SFooterNav,
  SFooterList,
  SFooterListItem,
  SFooterListItemLink,
} from './styles';

const Footer = ({ isnegative }) => {
  return (
    <SFooterContainer isnegative={isnegative}>
      <SFooterNav>
        <SFooterList>
          {footerList.map((item, index) => (
            <SFooterListItemLink href={item.link} key={index}>
              <SFooterListItem>{item.title}</SFooterListItem>
            </SFooterListItemLink>
          ))}
        </SFooterList>
      </SFooterNav>
    </SFooterContainer>
  );
};

export default Footer;
