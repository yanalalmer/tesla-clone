import React from 'react';
import logo from '../../assets/images/logo.svg';
import logoWhite from '../../assets/images/logoWhite.svg';
import icon1 from '../../assets/images/icon1.svg';
import icon2 from '../../assets/images/icon2.svg';
import icon3 from '../../assets/images/icon3.svg';
import arrow from '../../assets/images/arrow.svg';
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
            <SHeaderArrow src={arrow} />
          </SHeaderItem>
        ))}
        <SMobileOnly>
          <SHeaderCloseBtn>
            <svg
              className='tds-icon tds-icon-close tds-modal-close-icon'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill='#171a20'
                d='M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z'
              ></path>
            </svg>
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
