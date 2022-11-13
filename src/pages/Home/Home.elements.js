import styled from 'styled-components/macro'


export const Wrapper = styled.div` 
    width: 90vw;
    margin: 4vw 5vw;

    @media screen and (max-width: 991px) {
        height: 100vh;
    }
`

export const Section = styled.div`
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-wrap: wrap;

    @media screen and (max-width: 991px) {
        width: 90vw;
        height: 65vh;
        margin-left: 0vw;
    }
`
