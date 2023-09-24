import React from 'react';
import logo from '../../assets/images/logo.svg';
import logoWhite from '../../assets/images/logoWhite.svg';
import icon1 from '../../assets/images/icon1.svg';
import icon2 from '../../assets/images/icon2.svg';
import icon3 from '../../assets/images/icon3.svg';
import arrow from '../../assets/images/arrow.svg';
import closeBtn from '../../assets/images/closeBtn.svg';
// components
import { Button } from '../../components';
// styles
import {
  SHeader,
  SHeaderLogo,
  SHeaderImg,
  SHeaderLink,
  SHeaderMenu,
  SHeaderIconsMenu,
  SHeaderItem,
  SMobileOnly,
  SHeaderIconsLink,
  SHeaderBtnSpan,
  SHeaderCloseBtn,
  SHeaderArrow,
  SHeaderIcon,
} from './styles';

const Navbar = ({ isNegative }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SHeader isNegative={isNegative}>
      <SHeaderLogo>
        <SHeaderLink>
          <SHeaderImg src={isNegative ? logoWhite : logo} />
        </SHeaderLink>
      </SHeaderLogo>
      <SHeaderMenu open={isOpen}>
        {middleMenu.map((item, index) => (
          <SHeaderItem key={index}>
            <SHeaderBtnSpan>{item.name}</SHeaderBtnSpan>
            <SHeaderArrow src={arrow} />
          </SHeaderItem>
        ))}
        <SMobileOnly>
          <SHeaderCloseBtn onClick={handleClick}>
            <SHeaderIcon src={closeBtn} />
          </SHeaderCloseBtn>
          <SHeaderItem>
            <SHeaderBtnSpan>support</SHeaderBtnSpan>
          </SHeaderItem>
        </SMobileOnly>
        <SMobileOnly>
          <SHeaderItem>
            <SHeaderIcon src={icon3} />
            <SHeaderBtnSpan>Account</SHeaderBtnSpan>
          </SHeaderItem>
        </SMobileOnly>
      </SHeaderMenu>
      <SMobileOnly style={{ width: '72px' }}>
        <Button text='menu' isNegative onclick={handleClick} />
      </SMobileOnly>
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
