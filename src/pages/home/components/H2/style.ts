import styled from 'styled-components';
import { progressiveClamp } from '../../../../progressive/progressive';

interface TitleProps {
    color?: string;
    gridArea?: string;
    styled?: string;
}

export const Title = styled.h2<TitleProps>`
 
    font-family: Big Shoulders Display;
    font-style: normal;
    font-weight: 900;
    font-size: ${progressiveClamp(50, 60)};
    line-height: ${progressiveClamp(45, 60)};
    text-transform: uppercase;
    color: ${({ color }) => color ?? 'var(--black)'};
    grid-area: ${({ gridArea }) => gridArea ?? ''};
    ${({ styled }) => styled ?? ''}

`