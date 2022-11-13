import styled from 'styled-components/macro'


export const Wrapper = styled.div` 
    width: 90vw;
    height: 100%;
    margin: 5vw;
    position: relative;
    
    @media screen and (max-width: 991px) {
    }
    `

export const Section = styled.div`
    width: 100%;
    position: relative;

    @media screen and (max-width: 991px) {
    }
`

export const Batch = styled.div`
    width: 100%;
    height: 60vh;
    position: relative;

    @media screen and (max-width: 991px) {
        height: ${({ shrink }) => (shrink ? '40vh' : '100%')};
    }
`


export const VideoWrapper = styled.div`
    height: 75vh;
    padding: 0vh 1vw;
    text-align: center;
    width: ${({ vertical, third }) => (vertical ? (third ? '35vw' : '50vw') : '')};
    margin-left: ${({ right }) => (right ? '15vw' : '')};
    position: ${({ big }) => (big ? '' : 'absolute')};
    width: ${({ ww }) => (ww)}vw;
    height: ${({ hh }) => (hh)}vh;
    margin-top: ${({ yy }) => (yy)}vh;
    margin-left: ${({ xx }) => (xx)}vw;
    z-index: 9;

    @media screen and (max-width: 991px) {
        width: 90vw;
        height: 100%;
        overflow: hidden;
        padding: 0;
        width: 90vw;
        height: 100%;
        margin-top: 0;
        margin-left: 0;
        display: inline-block;
        position: relative;
    }
`

export const ImageFrame = styled.img`
    width: ${({ ww }) => (ww)}vw;
    height: ${({ hh }) => (hh)}vh;
    margin-top: ${({ yy }) => (yy)}vh;
    margin-left: ${({ xx }) => (xx)}vw;
    object-fit: contain;
    display: block;
    position: absolute;

    @media screen and (max-width: 991px) {
        width: ${({ mw }) => (mw)}vw;
        height: ${({ mh }) => (mh)}vh;
        margin-top: ${({ my }) => (my)}vh;
        margin-left: ${({ mx }) => (mx)}vw;
        width: 90vw;
        height: 100%;
        margin-top: 0;
        margin-left: 0;
        display: inline-block;
        position: relative;
    }
`