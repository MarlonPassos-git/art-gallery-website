import React from 'react'
import { Container, ContainerImg, Text } from './style'
import arrowRight from '../../assets/icon-arrow-right.svg'
import arrowLeft from '../../assets/icon-arrow-left.svg'

interface ButtonProps {
    text: string,
    arrowSide: 'right' | 'left',
}

export function Button({ text, arrowSide }: ButtonProps) {

    const [backgroundColor, setBackgroundColor] = React.useState(['var(--black)', 'var(--orange)'])

    function handleBackgroundColorChange() {
        const coresReversas = Array.from(backgroundColor).reverse()
        
        setBackgroundColor(coresReversas)
        
    }

    const arrow = (arrowSide === 'right') ? arrowRight : arrowLeft

    return (
        <Container
            backgroundColor={backgroundColor[0]}
            onMouseOver={handleBackgroundColorChange}
            onMouseOut={ handleBackgroundColorChange }
        
        >
            <Text>{text}</Text>
            <ContainerImg backgroundColor={ backgroundColor[1] } >
                <img src={ arrow } alt="" />
            </ContainerImg>
        </Container>
    )
}
