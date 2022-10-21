import styled from 'styled-components/macro'

export const ItemContainer = styled.div`
    flex: 33.33%;   
    height: ${({ half }) => (half ? '40vh' : '60vh')};
    position: relative;
    cursor: pointer;
    transition: all .2s ease-in-out;

    @media screen and (max-width: 991px) {
        flex: ${({ half }) => (half ? '50%' : '100%')};  
        height: ${({ half }) => (half ? '50%' : '50%')};
    }
`

export const ItemWrapper = styled.div`
    width: 100%;
    height: 100%;  
    transition: all .2s ease-in-out;
    position: relative;
`

export const TextContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-in-out;
    display: flex;
    margin: auto;
    opacity: 0;

    ${ItemContainer}:hover & {
        opacity: 1;
    } 

    @media screen and (max-width: 991px) {
        width: 90%;
        margin-left: 5%;
    }
`

export const TextWrapper = styled.div`
    width: 100%;
    text-decoration: none; 
    text-align: center;
    align-self: center;
    color: #222;
    user-select: none;
    padding: 10px 14px;
`

//text elements
export const HeadText = styled.h1`
    letter-spacing: -1px;
    font-size: 2em;
    font-weight: 700;
    line-height: 1.1em;
    cursor: pointer;
    text-align: center;

    @media screen and (max-width: 991px) {
        font-size: 1.4em;
    }
`

export const SubText = styled.h4`
    font-size: 1.4em;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1em;
    cursor: pointer;
`

export const ImageText = styled.p`
font-size: 15px;
    font-weight: 500;
    @media screen and (max-width: 991px) {
        font-weight: 600;
        font-size: 1.25em;
        line-height: 1em;
    }
`

export const PreviewImg = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;  
    transition: all .2s ease-in-out;
    padding: 8px;
    user-select: none;

    ${ItemContainer}:hover & {
        opacity: 0.3;
    }   
`

