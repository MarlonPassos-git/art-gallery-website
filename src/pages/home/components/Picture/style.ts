import styled from 'styled-components'
import { breakpoints } from '../../../../styles/Variaveis'

interface ContainerProps {
    gridArea?: string
}

export const Container = styled.picture<ContainerProps>`

    grid-area: ${({ gridArea }) => gridArea};

    
    img {
        object-fit: cover; 
        width: 100%;

        @media (max-width: ${breakpoints._mobile}) {
            width: calc(100vw - 32px);
        }

        @media (min-width: ${breakpoints._mobile}) {
            height: 100%;
            width: 100%;
        }
    }

   

`