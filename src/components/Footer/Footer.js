import React from 'react';
import { IconContext } from 'react-icons';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {
    FooterContainer,
    SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink,
    SmallText
} from './Footer.elements';

const Footer = () => {
    return (
        <IconContext.Provider value={{ size: 23, color: '#1e1e1e' }}>
            <FooterContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SmallText>contact@aqcommercial.com</SmallText>
                        <SocialIcons>
                            <SocialIconLink href="" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterContainer>
        </IconContext.Provider>
    )
}

export default Footer
