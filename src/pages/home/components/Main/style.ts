import styled from "styled-components";
import { progressiveClamp } from "../../../../progressive/progressive";
import { breakpoints } from "../../../../styles/Variaveis";

export const Container = styled.main`
    margin-top: ${progressiveClamp(120, 150)};
    display: grid;
    grid-template-columns: 1fr; 
    padding: 0 var(--container-padding);
    gap: 16px;
    
    grid-template: 
        "img1"
        "title"
        "paragraph"
        "img2"
        "img3"
        "blackCard"
    ;

    @media (min-width: ${breakpoints._mobile}) {
        gap: 11px;
         grid-template:
         "title     img1 img1" 
         "paragraph img1 img1" 
         "img2      img2 img3" 
         "img2      img2 blackCard" 
         /  40% calc(20% - 22px) 40% 


       
    ;
    }

`