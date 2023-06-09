import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    
    html, body {
        height: 100%;
        margin: 0;
        color: ${({ theme }) => theme.palette.lightText[0]};
    }
    
    #__next {
        min-height: 100%;
    }
    
    html {
        font-size: 10px;
    }
    
    body {
        font-size: ${({ theme }) => theme.typography.fontSizes.body}rem;
        font-family: ${({ theme }) => theme.typography.fontFamilies.montserrat};
        background-color: ${({ theme }) => theme.palette.grey[300]};
    }
`;

export default GlobalStyles;
