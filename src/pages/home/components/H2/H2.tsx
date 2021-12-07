import React, { ReactNode } from 'react'
import { Title } from './style'

interface h2Props {
    children: ReactNode;
    color?: string;
    gridArea?: string;
    styled?: string;
}

export default function H2({children, color, gridArea, styled}: h2Props) {
    return (
        <Title styled={styled } gridArea={ gridArea } color={ color }>
            {children}
        </Title>
    )
}
