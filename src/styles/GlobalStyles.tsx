import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    
    html, body {
        height: 100%;
        margin: 0;
        color: white;
    }
    
    #__next {
        min-height: 100%;
    }
    
    html {
        font-size: 10px;
    }
    
    body {
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
    }
`;

export default GlobalStyles;
