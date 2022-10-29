import styled from 'styled-components/macro';

export const VModule = styled.div`
    width: 100%;
    width: ${({ giveWidth }) => (giveWidth)};
    height: 77vh;
    height: ${({ giveHeight }) => (giveHeight)};
    padding: 0.5vh;
    display: block;
    float: left;
    position: relative;
    
    @media screen and (max-width: 991px) {
        width: 100%;
        transform: translate3d(0, 0, 0);
        height: ${({ pad }) => (pad ? '28em' : '26em')};
    }
`

export const VContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: ${({ customColor }) => (customColor)};    
    transform: translate3d(0, 0, 0);
`

export const VWrapper = styled.div`
    width: 100%;
    height: ${({ fill }) => (fill ? '' : '100%')};
    padding: ${({ pad }) => (pad ? '2em' : '0')};
    vertical-align: middle;

    @media screen and (max-width: 991px) {
        padding: ${({ pad }) => (pad ? '0.5em' : '0')};
        width: ${({ pad }) => (pad ? '' : '190%')};
        margin-left: ${({ pad }) => (pad ? '' : '-45%')};
    }
`