import styled from 'styled-components';
import { Rem } from '../../progressive/progressive';

export const Container = styled.button<Props>`
    width: ${Rem(260)};
    height: ${Rem(72)};
    border: none;
    background-color: ${props => props.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`
interface Props {
    backgroundColor: string;
}

export const Text = styled.span`
    font-family: Big Shoulders Display;
    font-weight: 800;
    font-size: ${Rem(20)};
    line-height: ${Rem(24)};
    letter-spacing: ${Rem(3.63636)};
    color: #FFFFFF;
    margin: 0 auto;
`


export const ContainerImg = styled.div<Props>`
    background-color: ${props => props.backgroundColor};
    height: 100%;
    width: ${Rem(56)};
    display: grid;
    place-items: center;
`