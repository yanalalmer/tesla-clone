import { createGlobalStyle } from 'styled-components';
import GothamSSm from '../assets/fonts/GothamSSm.woff2';
import GothamSSmMedium from '../assets/fonts/GothamSSm-Medium.woff2';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'GothamSSm';
        src: url(${GothamSSm}) format('woff2');
    }    
    @font-face {
        font-family: 'GothamSSmMedium';
        src: url(${GothamSSmMedium}) format('woff2');
    }
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'GothamSSm', sans-serif;
        font-size: 14px;
    }
    a {
        text-decoration: none;
        color: inherit;
        user-select: none;
    }
    ol, ul {
        list-style: none;
    }
    table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;
