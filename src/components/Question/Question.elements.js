import styled from 'styled-components/macro'

export const Wrapper = styled.div` 
    position: absolute;
    height: 88vh;
    width: 100%;
    background-color: #fff;
    /* transition: 1s; */
    display: ${({ hide }) => (hide ? 'none' : 'inline-block')};
    margin-left: ${({ page }) => (page ? '0%' : '100%')};

    @media screen and (max-width: 991px) {
        height: 90vh;
    }
`

export const Section = styled.div`
    width: 60vw;
    height: 65vh;
    margin-left: 20vw;
    margin-bottom: 5vh;
    position: relative;
    display: inline-flex;
    flex-wrap: wrap;

    @media screen and (max-width: 991px) {
        width: 90vw;
        height: 65vh;
        margin-left: 5vw;
    }
`

export const TextWrapper = styled.div`
    width: 100%;
    padding-top: 2vh;
    height: 12vh;
    color: #000;
    display: inline-block;
    text-align: center;

    @media screen and (max-width: 1500px) {
        padding-top: 0vh;
    }
    
    @media screen and (max-width: 991px) {
        height: 12vh;
    }
`