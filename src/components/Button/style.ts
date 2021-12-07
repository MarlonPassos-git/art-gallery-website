import styled from 'styled-components';
import { Rem } from '../../progressive/progressive';

export const Container = styled.button`
    width: ${Rem(260)};
    height: ${Rem(72)};
    border: none;
    background-color: var(--black);
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: var(--orange);

        div {
            background-color: var(--black);
        }
    }
`


export const Text = styled.span`
    font-family: Big Shoulders Display;
    font-weight: 800;
    font-size: ${Rem(20)};
    line-height: ${Rem(24)};
    letter-spacing: ${Rem(3.63636)};
    color: #FFFFFF;
    margin: 0 auto;
    text-transform: uppercase;
`


export const ContainerImg = styled.div`
    background-color: var(--orange);
    height: 100%;
    width: ${Rem(56)};
    display: grid;
    place-items: center;
`