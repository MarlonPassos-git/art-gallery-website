import styled from 'styled-components';
import { progressiveClamp } from '../../progressive/progressive';

export const P = styled.p`
    font-size: ${progressiveClamp(18, 22)};
    line-height: ${progressiveClamp(32, 28)};
`