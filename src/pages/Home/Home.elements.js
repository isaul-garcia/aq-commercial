import styled from 'styled-components/macro'


export const Wrapper = styled.div` 
    width: 90vw;
    margin: 5vw;

    @media screen and (max-width: 991px) {
        height: 90vh;
    }
`

export const Section = styled.div`
    position: relative;
    display: inline-flex;
    flex-wrap: wrap;

    @media screen and (max-width: 991px) {
        width: 90vw;
        height: 65vh;
        margin-left: 5vw;
    }
`
