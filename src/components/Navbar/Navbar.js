import React, { useEffect, useState } from 'react';
import {
    Icon,
    IconWrapper,
    Container,
    Wrapper,
    Nav,
    NavWrapper,
    NavText,
    MenuButton
} from './Navbar.elements';
import svgIcon from '../../assets/AQV.svg';
import { IconContext } from 'react-icons/lib';
import { GrMenu } from 'react-icons/gr'

const Navs = ({ handleClick }) => {
    return (
        <NavWrapper>
            <Nav onClick={handleClick}>
                <NavText onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/">Portfolio</NavText>
            </Nav>
            <Nav onClick={handleClick}>
                <NavText onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/about">About / Contact</NavText>
            </Nav>
        </NavWrapper>)
}

const Navbar = () => {
    const [button, setButton] = useState(+false);
    const [view, setView] = useState(+false);

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
                <Container>
                    <Wrapper>
                        <IconWrapper to="/">
                            <Icon src={svgIcon} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} />
                        </IconWrapper>

                        {button ? (
                            <>
                                <MenuButton onClick={handleClick}>
                                    <GrMenu />
                                </MenuButton>
                                {view ? (
                                    <Navs handleClick={handleClick} />
                                ) : (
                                    null
                                )}
                            </>
                        ) : (
                            <Navs />
                        )}

                    </Wrapper>
                </Container>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
