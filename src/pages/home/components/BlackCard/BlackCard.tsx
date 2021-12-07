import React from 'react'
import { Paragraph } from '../../../../components/Paragraph/Paragraph'
import H2 from '../H2/H2'
import { Container } from './style'

export default function BlackCard() {
    return (
        <Container>
            <H2 color="var(--white-light)" >COME & BE INSPIRED</H2>
            <Paragraph color='#FFFFFF99' text="We’re excited to welcome you to our gallery and see how our collections influence you." />
        </Container>
    )
}
