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
        background-color: #f0f0f0;
        color: #111111;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'DM Sans', sans-serif;
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
        font-size: 4vh;
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
        font-weight: 600;
        font-size: 1.5em;
    }

    h5 {
        font-weight: 400;
        font-size: 1.25em;
    }    

    p {
        font-weight: 300;
        font-size: 1.25em;
    }

    button {
        cursor: pointer;
        background-color: #007bff;
        border: 1px #006be1 solid;
        border-radius: 8px;
        padding: 10px 16px;
        font-size: 1.15em;
        color: #fff;
    }

    button:hover {
        background-color: #006de6;
        color: #fff;
    }

    input {
        border: none;
        padding: 10px 12px;
        border-radius: 5px;
        margin-top: 4px;
        font-size: 1em;
        font-family: 'DM Sans', sans-serif;
        width: 40vw;
        background-color: #f0f0f0;

        @media screen and (max-width: 1300px) {
            width: 45vw;
        }

        @media screen and (max-width: 991px) {
            width: 90vw;
        }
    }

    textarea {
        border: none;
        padding: 10px 12px;
        border-radius: 5px;
        margin-top: 4px;
        font-size: 1em;
        font-family: 'DM Sans', sans-serif;
        background-color: #f0f0f0;
    }
`

export const SmallSpacer = styled.div` 
    height: 16px;
    width: 100%;
    display: inline-block;
    position: relative;
`

export const Wrapper = styled.div` 
    position: relative;
    display: inline-block;
    height: 100%;
    width: 100%;
    background: linear-gradient(205deg, rgba(240,240,240,1) 0%, rgba(222,194,181,1) 100%);
`

export const Section = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: inline-flex;
    flex-wrap: wrap;
`

export default GlobalStyle