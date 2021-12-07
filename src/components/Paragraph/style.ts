import styled from 'styled-components';
import { progressiveClamp } from '../../progressive/progressive';

interface ParagraphProps {
    color?: string;
    gridArea?: string;
}


export const P = styled.p<ParagraphProps>`
    font-size: ${progressiveClamp(18, 22)};
    line-height: ${progressiveClamp(28, 32)};

    font-family: Outfit;
    font-weight: 300;
    color: ${({ color }) => color ?? 'var(--black-light)'};
    grid-area: ${({ gridArea }) => gridArea ?? ''};


`