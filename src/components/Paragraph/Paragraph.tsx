import React from 'react'
import { P } from './style'

interface paragraphProps {
    text: string;
    color?: string;
    gridArea?: string;
}


export function Paragraph({ text, color, gridArea }: paragraphProps) {
    return (
        <P gridArea={ gridArea } color={ color }>{ text }</P>
    )
}
