import styled from "styled-components";
import { progressiveClamp } from "../../../../progressive/progressive";

export const Container = styled.div`
    background-color: var(--black);
    padding: 0 24px;
    width: 100%;
    min-height: 293px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${progressiveClamp(24, 32)};
    grid-area: blackCard;
    height: 100%;

`