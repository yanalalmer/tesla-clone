import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Montserrat', sans-serif;
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
