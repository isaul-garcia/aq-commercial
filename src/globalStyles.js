import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        /* &::-moz-selection { background: #111; color: #fff;}
        &::selection { : #111; color: #fff; } */
    }    

    body {
        background-color: #ffffff;
        color: #111111;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Figtree', sans-serif;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        -webkit-overflow-scrolling: auto;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 8px;    
    }

    /* Track */
    ::-webkit-scrollbar-track {
        border-radius: 20px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 20px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;   
    }

    h1 {
        font-weight: 900;
        font-size: 4.5em;
    }

    h2 {
        font-weight: 900;
        font-size: 3.5vh;
        @media screen and (max-width: 991px) {
            line-height: 4.25vh;
        }
    }

    h3 {
        font-weight: 500;
        font-size: 2.75vh;
        line-height: 2vh;
        @media screen and (max-width: 991px) {
            line-height: 5vh;
        }
    }

    h4 {
        font-weight: 400;
        font-size: 1.35em;
    }

    h5 {
        font-weight: 400;
        font-size: 1em;
    }    

    p {
        font-weight: 300;
        font-size: 1.5em;
        line-height: 1.5em;
    }

    button {
        cursor: pointer;
        background-color: #fff;
        border: 1px #000 solid;
        padding: 10px 16px;
        font-size: 1.15em;
        color: #000;
    }

    button:hover {
        background-color: #000;
        color: #fff;
    }

    input {
        border: none;
        padding: 8px 10px;
        /* border-radius: 5px; */
        margin-top: 4px;
        font-size: 0.9em;
        font-family: 'DM Sans', sans-serif;
        width: 100%;
        border-bottom: 1px solid #000;
    }

    textarea {
        border: none;
        padding: 10px 12px;
        margin-top: 4px;
        font-size: 1em;
        font-family: 'DM Sans', sans-serif;
        border-bottom: 1px solid #000;
    }

    @keyframes justFade {
        0%   {opacity: 0;}
        100% {opacity: 1;}
    }
`

export const SmallSpacer = styled.div` 
    height: 16px;
    width: 100%;
    display: inline-block;
    position: relative;

    @media screen and (max-width: 991px) {
    height: ${(({ mobiRemove }) => (mobiRemove ? '0' : '16px'))};
    }
`

export const MediumSpacer = styled.div` 
    height: 9vh;
    width: 100%;
    display: inline-block;
    position: relative;
    
    @media screen and (max-width: 991px) {
    height: ${(({ mobiRemove }) => (mobiRemove ? '0' : '9vh'))};
    }
`

export const Wrapper = styled.div` 
    position: relative;
    display: inline-block;
    height: 100%;
    width: 100%;
`

export const Section = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: inline-flex;
    flex-wrap: wrap;
`

export default GlobalStyle