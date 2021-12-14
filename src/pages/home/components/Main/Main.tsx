import React from 'react'
import { Paragraph } from '../../../../components/Paragraph/Paragraph'
import H2 from '../H2/H2'
import { Picture } from '../Picture/Picture'
import { Container } from './style'
import imgGrid_1_Mobile from '../../../../assets/mobile/image-grid-1.jpg'
import imgGrid_2_Mobile from '../../../../assets/mobile/image-grid-2.jpg'
import imgGrid_3_Mobile from '../../../../assets/mobile/image-grid-3.jpg'
import imgGrid_1_table from '../../../../assets/tablet/image-grid-1.jpg'
import imgGrid_2_table from '../../../../assets/tablet/image-grid-2.jpg'
import imgGrid_3_table from '../../../../assets/tablet/image-grid-3.jpg'
import imgGrid_1_desktop from '../../../../assets/desktop/image-grid-1.jpg'
import imgGrid_2_desktop from '../../../../assets/desktop/image-grid-2.jpg'
import imgGrid_3_desktop from '../../../../assets/desktop/image-grid-3.jpg'
import BlackCard from '../BlackCard/BlackCard'
import { progressive, progressiveClamp } from '../../../../progressive/progressive'
import { breakpoints } from '../../../../styles/Variaveis'



export default function Main() {


    const h2style = `
        align-self: start;
        

        @media (min-width: ${breakpoints._mobile}) {
            margin-top: ${progressive(36, 60, 768)};
            max-width: ${progressiveClamp(223, 350, 768)};
        }
    `
        
    

    return (
        <Container>
            <Picture
                gridArea='img1'
                imgDesktop={ imgGrid_1_desktop }
                imgTablet={ imgGrid_1_table }    
                imgMobile={ imgGrid_1_Mobile }
            />
            <H2 styled={ h2style}  gridArea='title'>Your Day at the Gallery</H2>
            <Paragraph gridArea='paragraph' text='Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.' />
            <Picture
                gridArea='img2'
                imgDesktop={imgGrid_2_desktop}
                imgTablet={imgGrid_2_table}
                imgMobile={imgGrid_2_Mobile}
            />
            <Picture
                gridArea='img3'
                imgDesktop={imgGrid_3_desktop}
                imgTablet={imgGrid_3_table}
                imgMobile={imgGrid_3_Mobile}
            />
            <BlackCard />
        </Container>
    )
}
