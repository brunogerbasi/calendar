import styled from 'styled-components'

export const CalendarContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    width: 100% ;
    margin-bottom: 3rem ;
    h1{
        text-align: center ;
        text-transform: uppercase ;
        color: #EE171F ;
        margin-bottom: 0.5rem;
    }
    p{
        text-align: center ;
        margin:0px ;
        margin-bottom: 2rem ;
    }

    .fc-h-event{
        background-color: #810A0D;
        border: solid 1px #810A0D ;
    }
`;

export const HeroesEvent = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: center ;
    text-align: center ;
    width: 100% ;
    gap: 15px;
    margin-bottom: 3rem ;  
    flex-wrap  : wrap ;

    div{
        width: calc(100% / 5) ;
        max-width: 160px;
        border-radius: 5px ;
        border: solid 1px #191919;
        box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.1);
        cursor: move;
        padding: 5px ;
        img{
            display:block ;
            width: 100% ;
            max-height:90px ;
            max-width: 160px ;
            object-fit: cover ;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
        h2{
            font-size: 1rem ;
        }

        @media (max-width: 600px) {
            width: calc(100% / 3) ;

            h2{
                font-size: 0.8rem ;
            }
        }
    }
`;