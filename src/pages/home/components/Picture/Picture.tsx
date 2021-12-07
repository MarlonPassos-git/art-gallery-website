import React from 'react'
import { breakpoints } from '../../../../styles/Variaveis'
import { Container } from './style'


interface PictureProps {
    imgDesktop: string;
    imgTablet: string;
    imgMobile: string;
    gridArea?: string;
}

export function Picture({imgDesktop, imgTablet, imgMobile, gridArea}: PictureProps) {
    return (
        <Container gridArea={gridArea}>
                <source media={`(min-width:${breakpoints._tablet})`} srcSet={ imgDesktop } />
                <source media={`(min-width:${breakpoints._mobile})`} srcSet={ imgTablet } />
                <source media={`(max-width:${breakpoints.mobile})`} srcSet={ imgMobile } />
                <img src={ imgDesktop } alt="Flowers" />
         </Container>
    )
}
