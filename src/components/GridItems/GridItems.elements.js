import styled from 'styled-components/macro'

export const ItemContainer = styled.div`
    flex: 50%;   
    height: ${({ half }) => (half ? '50%' : '100%')};
    float: left;
    position: relative;
    cursor: pointer;
    transition: all .2s ease-in-out;

    @media screen and (max-width: 991px) {
        flex: ${({ half }) => (half ? '50%' : '100%')};  
        height: ${({ half }) => (half ? '50%' : '50%')};
    }
`

export const HoverHelper = styled.div`
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    position: absolute;
    transition: all 0.2s ease-in-out;
    justify-content: center;
    margin: 8px;
    background-color: #11111100;

    ${({ isChosen }) => (isChosen ? `
        background-color: #11111155;
    ` : ``)};

    ${ItemContainer}:hover & {
        width: calc(100% - 24px);
        height: calc(100% - 24px);
        margin: 12px;
    }  

    @media screen and (max-width: 991px) {
        ${ItemContainer}:hover & {
            transition: all 0s ease-in-out;
            width: calc(100% - 16px);
            height: calc(100% - 16px);
            margin: 8px;
    }  
    }
`

export const TextContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 0.1s ease-in-out;
    justify-content: center;
    display: flex;
    z-index: 100;

    @media screen and (max-width: 991px) {
        width: 90%;
        margin-left: 5%;
    }
`

export const TextWrapper = styled.div`
    text-decoration: none; 
    text-align: center;
    align-self: center;
    color: #222;
    user-select: none;
    padding: 10px 14px;
    background-color: #f0f0f0;
    border: 1px solid #e0e0e0;
    border-radius: 17px;
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

export const ImageText = styled.h4`
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
    transition: all .1s ease-in-out;
    padding: 8px;
    outline: 0px solid #111111;
    outline-offset: -10px;
    user-select: none;

    ${({ isChosen }) => (isChosen ? `
    outline: 5px solid #111111;
    outline-offset: -13px;
    ` : ``)};

    ${ItemContainer}:hover & {
        padding: 12px;
        @media screen and (max-width: 991px) {
            padding: 8px;
            transition: all 0s ease-in-out;
        }
    }   
`

export const ItemWrapper = styled.div`
    width: 100%;
    height: 100%;  
    transition: all .2s ease-in-out;
    position: relative;
`

