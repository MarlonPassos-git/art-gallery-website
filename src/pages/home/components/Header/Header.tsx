import React from 'react'
import { Button } from '../../../../components/Button/Button'
import { Paragraph } from '../../../../components/Paragraph/Paragraph'
import { Container, Title } from './style'

export default function Header() {
    return (
        <Container>
            <Title>MODERN ART GALLERY </Title>
            <Paragraph text='The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.' />
            <Button arrowSide="right" text="sas" />
        </Container>
    )
}
