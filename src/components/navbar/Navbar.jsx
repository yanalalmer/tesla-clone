import React from 'react';
import logo from '../../assets/images/logo.svg';
import logoWhite from '../../assets/images/logoWhite.svg';
import icon1 from '../../assets/images/icon1.svg';
import icon2 from '../../assets/images/icon2.svg';
import icon3 from '../../assets/images/icon3.svg';
// styles
import {
  SHeader,
  SHeaderLogo,
  SHeaderImg,
  SHeaderLink,
  SHeaderMenu,
  SHeaderIconsMenu,
  SHeaderItem,
  SHeaderIconsLink,
  SHeaderBtnSpan,
  SHeaderIcon,
} from './styles';

const Navbar = ({ negative }) => {
  return (
    <SHeader>
      <SHeaderLogo>
        <SHeaderLink>
          <SHeaderImg src={negative ? logoWhite : logo} />
        </SHeaderLink>
      </SHeaderLogo>
      <SHeaderMenu>
        {middleMenu.map((item, index) => (
          <SHeaderItem key={index}>
            <SHeaderBtnSpan>{item.name}</SHeaderBtnSpan>
          </SHeaderItem>
        ))}
      </SHeaderMenu>
      <SHeaderIconsMenu>
        {icons.map((icon, index) => (
          <SHeaderIconsLink key={index}>
            <SHeaderIcon src={icon.icon} alt='icon' />
          </SHeaderIconsLink>
        ))}
      </SHeaderIconsMenu>
    </SHeader>
  );
};

export default Navbar;

const middleMenu = [
  {
    name: 'vehicels',
  },
  {
    name: 'energy',
  },
  {
    name: 'charging',
  },
  {
    name: 'discover',
  },
  {
    name: 'shop',
  },
];

const icons = [
  {
    icon: icon1,
    link: '',
  },
  {
    icon: icon2,
    link: '',
  },
  {
    icon: icon3,
    link: '',
  },
];
