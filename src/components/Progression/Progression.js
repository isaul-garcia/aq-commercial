import React from 'react';
import {
    Container, Indicator, Nav, Wrapper
} from './Progression.elements';
import { IconContext } from 'react-icons/lib';
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

const Progression = ({handleNext, handlePrev, page}) => {
    return (
        <>
            <IconContext.Provider value={{ size: 20, color: '#000' }}>
                <Container>
                    <Wrapper>
                        <Nav page={page === 1} onClick={() => handlePrev()}><MdArrowBack style={{transform: 'translateY(4px)'}} /> Prev</Nav>
                        <Indicator page={page === 1} done title="Location" />
                        <Indicator page={page === 2} title="Location" />
                        <Indicator page={page === 3} title="Location" />
                        <Indicator page={page === 4} title="Location" />
                        <Indicator page={page === 5} title="Location" />
                        <Indicator page={page === 6} title="Location" />
                        <Indicator page={page === 7} title="Location" />
                        <Indicator page={page === 8} title="Location" />
                        <Nav page={page === 8} onClick={() => handleNext()} right>Next <MdArrowForward style={{transform: 'translateY(4px)'}} /></Nav>
                    </Wrapper>
                </Container>
            </IconContext.Provider>
        </>
    )
}

export default Progression;