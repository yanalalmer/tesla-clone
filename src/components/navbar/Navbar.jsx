import React from 'react';
import { navbarMenu, navIcons } from '../../data';
import logo from '../../assets/images/logo.svg';
import logoWhite from '../../assets/images/logoWhite.svg';
import arrow from '../../assets/images/arrow.svg';
import closeBtn from '../../assets/images/closeBtn.svg';
import icon3 from '../../assets/images/icon3.svg';
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

const Navbar = ({ isnegative }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SHeader isnegative={isnegative}>
      <SHeaderLogo>
        <SHeaderLink href='/'>
          <SHeaderImg src={isnegative ? logoWhite : logo} />
        </SHeaderLink>
      </SHeaderLogo>
      <SHeaderMenu open={isOpen}>
        {navbarMenu.map((item, index) => (
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
        <Button text='menu' isnegative onclick={handleClick} />
      </SMobileOnly>
      <SHeaderIconsMenu>
        {navIcons.map((icon, index) => (
          <SHeaderIconsLink key={index}>
            <SHeaderIcon src={icon.icon} alt='icon' />
          </SHeaderIconsLink>
        ))}
      </SHeaderIconsMenu>
    </SHeader>
  );
};

export default Navbar;
