import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`    
    body{
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        color: #191919 ;
    }
    *{
        box-sizing:border-box ;
    }
`;

export default GlobalStyle