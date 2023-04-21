import React from 'react';
import { IconContext } from 'react-icons';
import { FaInstagram } from 'react-icons/fa';
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
                        <SmallText><a style={{textDecoration: 'none', color: '#1e1e1e'}} href="mailto:aqviews1@gmail.com">aqviews1@gmail.com</a></SmallText>
                        <SocialIcons>
                            <SocialIconLink href="https://www.instagram.com/aqviews/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterContainer>
        </IconContext.Provider>
    )
}

export default Footer
