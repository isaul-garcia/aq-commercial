import styled from 'styled-components';

export const FooterContainer = styled.div`
background-color: #fff;
padding:1.5rem 0 4rem 0;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 991px) {
        height: 15vh;
        width: 100vw;
    }
`

export const SocialMedia = styled.section`
width: 100%;
`

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: auto;
width:89%;

@media screen and (max-width: 991px) {
    flex-direction: column;
}
`

export const SmallText = styled.p`
font-size: 16px;
line-height: 8px;
color: #444444;
margin-bottom: 16px;
user-select: all;

@media screen and (max-width: 991px) {
    margin-bottom: 40px;
}
`

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const SocialIconLink = styled.a`
color: #444;
font-size: 24px;
margin-left: 22px;

@media screen and (max-width: 991px) {
    margin-left: 0;
    margin: 0 20px;
}
`