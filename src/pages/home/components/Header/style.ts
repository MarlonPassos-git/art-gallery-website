import styled from 'styled-components';
import { progressive, progressiveClamp, Rem } from '../../../../progressive/progressive';
import { breakpoints } from '../../../../styles/Variaveis';


export const Container = styled.header`
    display: grid;
    min-height: ${progressiveClamp(630, 800)};
    padding: 0 var(--container-padding);
    grid-template-rows: min-content;
    grid-template-columns: 100%;
    
    @media (min-width:${breakpoints._mobile}) {
        
        
    }
    
`

export const Content = styled.div`
    display: grid;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    grid-template:
        "title" 
        "paragraph"
        "button"
        
    ;
    gap: ${Rem(32)};
    width: 100%;
    position: relative;

   
    
    @media (min-width:${breakpoints._mobile}) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        gap: ${Rem(48)};

        height: min-content;
        align-self: center;
        max-width: ${Rem(339)};
        justify-self: end;
    }
    
    @media (min-width: ${breakpoints._tablet}) {
         grid-template:
            "title paragraph" 
            "title button"
            / 1fr ${Rem(350)}
        ;
        max-width: none;
        gap: ${ Rem(64)} 0;
        align-self: start;
        margin-top: ${Rem(190)};
    ;
     }

`

export const Picture = styled.picture`
    grid-area: img;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    z-index: -1;
    

    @media (max-width: ${breakpoints.mobile}) {
        width: 100vw;
        transform: translateX(-16px);
        margin-bottom: ${Rem(32)};
    }

     @media (min-width: ${breakpoints._mobile}) {
        transform: translateX(calc(-1 * ${progressive(16, 165)}));
        grid-column: 1 / 2;
        grid-row: 1 / 2;
     }
     @media (min-width: ${breakpoints._tablet}) {
         transform: none;
         justify-self: center;
        border-right: 50vw solid transparent;
        border-left: 50vw solid;
     }
`


export const Title = styled.h1`
    grid-area: title;
    font-family: Big Shoulders Display;
    font-weight: 900;
    font-size: ${progressiveClamp(60, 96, 450)};
    line-height: ${progressiveClamp(55, 88, 450)};
    text-transform: uppercase;
    color: var(--black);
    max-width: ${progressiveClamp(335, 450, breakpoints.__tablet)};

    @media (min-width: ${breakpoints._tablet}) {
        color: var(--white-light);
        mix-blend-mode: difference;
        position: relative;
    }


    
`

export const button = styled.button`
    grid-area: button;
    
`

