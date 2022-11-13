import styled from 'styled-components';

export const Container = styled.div`
background-color: #fff;
padding:2rem 0 4rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Photo = styled.img`
    height: 480px;
    display: block;
    position: relative;
    object-fit: cover;
`

export const TextContainer = styled.div`
    margin: auto;
    width: 50%;
    margin-top: 5%;
    text-align: center;
`

export const Title = styled.h2`
    font-size: 1.8em;
`

export const Description = styled.p`
    font-size: 1.2em;
`

export const AQicon = styled.img`
    height: 12px;
    display: block;
    position: relative;
    object-fit: cover;
`