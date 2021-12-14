import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Paragraph } from '../Paragraph/Paragraph'
import { SocialList } from '../SocialList/SocialList'
import { Container, Title } from './style'

interface FooterProps { 
    theme: {
        background: string,
        textColor: string,
        hoverIcon: string,
    }
}

export default function Footer({ theme }: FooterProps) {
    return (
        <ThemeProvider theme={ theme } >
        <Container>
            <Title>modern art gallery</Title>
            <Paragraph text="The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA." />
            <SocialList />
            </Container>
        </ThemeProvider>
    )
}
