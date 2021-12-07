import React from 'react'
import { Container, ContainerImg, Text } from './style'
import arrowRight from '../../assets/icon-arrow-right.svg'
import arrowLeft from '../../assets/icon-arrow-left.svg'

interface ButtonProps {
    text: string,
    arrowSide: 'right' | 'left',
}

export function Button({ text, arrowSide }: ButtonProps) {

    const arrow = (arrowSide === 'right') ? arrowRight : arrowLeft;

    return (
        <Container>
            <Text>{text}</Text>
            <ContainerImg  >
                <img src={ arrow } alt="" />
            </ContainerImg>
        </Container>
    )
}
