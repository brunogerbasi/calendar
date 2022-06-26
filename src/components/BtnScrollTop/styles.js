
import styled from 'styled-components';

export const Button = styled.div`
    position: fixed; 
    width: 2rem;
    right: 17px;
    bottom: 28px;
    height: 2rem;
    font-size: 1.8rem;    
    z-index: 999;
    cursor: pointer;
    color: #242D7B;

    @media (max-width: 780px) {
        bottom: 80px;
        right: 15px;
    }
`