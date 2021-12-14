import styled from "styled-components";
import { progressiveClamp } from "../../../../progressive/progressive";
import { breakpoints } from "../../../../styles/Variaveis";

export const Container = styled.div`
    background-color: var(--black);
    padding: ${progressiveClamp(48, 85, breakpoints.__mobile ,breakpoints.__tablet)} 24px;
    width: 100%;
    min-height: 293px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${progressiveClamp(24, 32)};
    grid-area: blackCard;
    height: 100%;

    @media (min-width: ${breakpoints._tablet}) {
        padding: ${progressiveClamp(85, 65, breakpoints.__tablet)} 24px;
    }
    
`
