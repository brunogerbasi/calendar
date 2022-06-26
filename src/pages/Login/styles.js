import styled from 'styled-components'

export const MainContainer = styled.main`
    min-height: calc(100vh - 3.5rem) ;
    background: linear-gradient(0deg, rgba(237,237,237,1) 0%, rgba(237,237,237,1) 70%, rgba(32,32,32,1) 70%, rgba(32,32,32,1) 100%);
    padding-top: 5rem ;

    @media  (max-width: 780px ) {
        background:  rgba(237,237,237,1);
        display: flex ;
        justify-content: center ;
        align-items: center ;
        padding: 1rem ;
    }
`;

export const ContainerLogo = styled.div`
    text-align: center ;
    img{
        max-width: 200px ;
    }
`;

export const CardLogin = styled.div`
    max-width: 426px;
    width: 100% ;
    margin: 0 auto ;    
    box-shadow: 0 0.0625rem 0.125rem 0 rgb(0 0 0 / 15%);    
    padding: 2rem 4rem;
    background-color: #FFFFFF ;
    border-radius: 6px;

    h1{
        font-size: 1.5rem;
    }

    form{
        label{
            margin-bottom:5px ;
            width:100% ;
            display: block ;
            font-size: 0.875rem;
        }
        input{
            min-height: 48px ;
            font-size: 1rem ;
            line-height: 1.5rem ;
            width: 100% ;
            border-radius:6px ;
            border:solid 1px #BFBFBF ;
            padding: 0.8125em 0.75em;
            margin-bottom: 1rem ;
        }
        button{
            margin: 0.85rem 0 ;
            background-color: #EE171F;
            border-color: transparent;
            color: #fff;
            width: 100% ;
            border-radius: 6px ;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            height: 48px;
            line-height: 48px;
            padding: 0 24px;
            transition: 0.3s ;

            &:hover{
                background-color: #C80F13;
                transition: 0.3s ;
            }
        }

        p{
            color: red ;
            font-size: 0.9rem ;
            span{
                color: #191919;
            }
        }
    }
`;
 