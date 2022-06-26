import styled from 'styled-components'

export const HeaderContainerLog = styled.header`
    background: rgb(32 32 32) ;    
    div{
        height: 3.5rem;    
        display: flex ;
        align-items: center ;
        justify-content: space-between ;
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
    }
    a{
        height: 2.8rem ;
    }
    img{
        max-width: 100% ;
        max-height: 2.8rem ;
    }
    button{
        border-radius: 6px;
        padding: 5px 13px;
        font-size: 0.8rem;
        font-weight: bold;
        border: 1px solid #191919;
        cursor: pointer;  
        display : flex ;
        align-items: center ;
        justify-content: center ;
        gap: 5px;
        transition: 0.3s ;
        &:hover{
            background: #EE171F;
            color: #FFFFFF;
            transition: 0.3s ;
        }
        span{
            font-size: 1rem;
        }
    }
`;