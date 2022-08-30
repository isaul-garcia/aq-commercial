import styled from 'styled-components/macro'

export const MyForm = styled.div`
    width: 500px;

    @media screen and (max-width: 991px) {
        width: 90vw;
    }
`

export const Wrapper = styled.div` 
    position: relative;
    display: inline-block;
    height: 100%;
    width: 100%;
`

export const Section = styled.div`
    width: 40vw;
    height: 75vh;
    margin-left: 30vw;
    margin-top: 5vh;
    position: relative;
    display: inline-flex;
    flex-wrap: wrap;

    @media screen and (max-width: 1300px) {
        height: 75vh;
        width: 45vw;
    }

    @media screen and (max-width: 991px) {
        width: 90vw;
        height: 85vh;
        margin-left: 5vw;
    }
`

export const TextWrapper = styled.div`
    width: 100%;
    padding: 5vw;
    padding-top: 5vh;
    height: 14vh;
    color: #000;
    display: inline-block;
    text-align: center;

    @media screen and (max-width: 1300px) {
        height: 0vh;
        padding: 0vw;
    }

    @media screen and (max-width: 991px) {
        padding: 5vw;
        height: 0;
    }
`

export const DetailText = styled.h5`
    float: right;
    position: relative;
    vertical-align: top;
    color: #444;
    font-size: 0.9em;
    line-height: 2em;

    @media screen and (max-width: 991px) {
        float: left;
    }
`


export const InputSection = styled.div`
    width: 40vw;
    margin-bottom: 20px;

    @media screen and (max-width: 1300px) {
        width: 45vw;
    }

    @media screen and (max-width: 991px) {
        width: 90vw;
    }
`

export const ObjectiveInput = styled.textarea`
    width: 40vw;
    height: 200px;

    @media screen and (max-width: 1300px) {
        width: 45vw;
        height: 110px;
    }

    @media screen and (max-width: 991px) {
        width: 90vw;
        height: 160px;
    }
`