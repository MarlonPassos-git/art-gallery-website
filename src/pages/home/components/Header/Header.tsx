import React from 'react'
import { Button } from '../../../../components/Button/Button'
import { Paragraph } from '../../../../components/Paragraph/Paragraph'
import { Container, Content, Picture, Title } from './style'
import imgMobile from '../../../../assets/mobile/image-hero.jpg'
import imgTablet from '../../../../assets/tablet/image-hero.jpg'
import imgDesktop from '../../../../assets/desktop/image-hero.jpg'
import { breakpoints } from '../../../../styles/Variaveis'

export default function Header() {
    return (
        <Container>
            
            <Picture>
                <source media={`(min-width:${breakpoints._tablet})`} srcSet={ imgDesktop } />
                <source media={`(min-width:${breakpoints._mobile})`} srcSet={ imgTablet } />
                <source media={`(max-width:${breakpoints.mobile})`} srcSet={ imgMobile } />
                <img src={ imgDesktop } alt="Flowers" />
            </Picture>
            <Content>
                <Title >MODERN ART GALLERY </Title>
                <Paragraph text='The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.' />
                <Button arrowSide="right" text="OUR LOCATION" />
            </Content>

        </Container>
    )
}
