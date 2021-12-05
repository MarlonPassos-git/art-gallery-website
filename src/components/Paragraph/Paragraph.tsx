import React from 'react'
import { P } from './style'

interface paragraphProps {
    text: string
}


export function Paragraph({ text }: paragraphProps) {
    return (
        <P>{ text }</P>
    )
}
