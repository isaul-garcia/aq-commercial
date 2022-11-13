import styled from 'styled-components/macro'

export const Container = styled.div`
    width: 35%;
    height: 100%;
    
    @media screen and (max-width: 1300px) {
        width: 45vw;
    }

    @media screen and (max-width: 991px) {
        width: 80%;
    }
`

export const InputSection = styled.div`
    width: 35vw;
    margin-bottom: 20px;
    
    @media screen and (max-width: 1300px) {
        width: 45vw;
    }

    @media screen and (max-width: 991px) {
        width: 100%;
    }
`

export const ObjectiveInput = styled.textarea`
    width: 35vw;
    height: 120px;

    @media screen and (max-width: 1300px) {
        width: 45vw;
        height: 110px;
    }

    @media screen and (max-width: 991px) {
        width: 100%;
        height: 160px;
    }
`

export const SendButton = styled.button` 
    float: right;
    right: -7vw; 

    @media screen and (max-width: 1500px) {
        
    /* right: -7vw;  */
    }

    @media screen and (max-width: 991px) {
       
    /* right: -7vw;  */
    }
`