import React, { useEffect, useState } from 'react';
import {
    Icon,
    IconWrapper,
    NavContainer,
    Nav,
    NavWrapper,
    NavText,
    MenuButton
} from './Navbar.elements';
import svgIcon from '../../assets/AQC.svg';
import { IconContext } from 'react-icons/lib';
import { GrMenu } from 'react-icons/gr'

const Navs = () => {
    return (
        <NavWrapper>
            <Nav>
                <NavText>Photos</NavText>
            </Nav>
            <Nav>
                <NavText>Videos</NavText>
            </Nav>
            <Nav>
                <NavText>About</NavText>
            </Nav>
            <Nav>
                <NavText>Contact</NavText>
            </Nav>
        </NavWrapper>)
}

const Navbar = () => {
    const [button, setButton] = useState(false);
    const [view, setView] = useState(false);

    const handleClick = () => setView(!view);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(true)
        } else {
            setButton(false)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <IconContext.Provider value={{ size: 30 }}>
                <NavContainer>
                    <IconWrapper to="/">
                        <Icon src={svgIcon} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} />
                    </IconWrapper>

                    {button ? (
                        <>
                            <MenuButton onClick={handleClick}>
                                <GrMenu />
                            </MenuButton>
                            {view ? (
                                <Navs />
                            ) : (
                                null
                            )}
                        </>
                    ) : (
                        <Navs />
                    )}

                </NavContainer>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;