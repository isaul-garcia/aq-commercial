import styled from 'styled-components/macro'

export const Container = styled.div`
    width: 100%;
    height: 80px;
    margin-top: calc(88vh - 80px);
    position: absolute;
`

export const Wrapper = styled.div`
    width: 60%;
    height: 100%;
    margin: 0 20%;
    text-align: center;
`

export const Indicator = styled.div`
    width: 10px;
    height: 10px;
    display: inline-block;
    border-radius: 20px;
    margin: 15px 8px;
    background-color: ${({page}) => (page) ? '#000' : '#ddd'};
    cursor: pointer;

    @media screen and (max-width: 1500px) {
        margin: 20px 8px;
    }
`

export const Nav = styled.span`
    height: 20px;
    border-radius: 20px;
    margin: 10px;
    float: ${({right}) => (right) ? 'right' : 'left'};
    color: #000;
    cursor: pointer;
    transition: 0.2s;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; 
    display: ${({ page }) => (page ? 'none' : '')};

    &:hover {
        opacity: 0.5;
    }

    @media screen and (max-width: 1500px) {
        margin: 12px;
    }
`