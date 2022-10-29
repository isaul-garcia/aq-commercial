import React from 'react';
import {
    Container, Description, Photo, TextContainer, Title
} from './About.elements';
import FormModule from '../FormModule/FormModule';
import { MediumSpacer } from '../../globalStyles';
import aqPhoto from '../../assets/AQPhoto.jpg';
import aq from '../../assets/AQ.svg';
import { HiMinus } from "react-icons/hi";

const About = () => {
    return (
        <Container>
            <Photo src={aqPhoto} />
            <TextContainer>
                <Description>
                    <strong>Andrés Quiñones (AQ)</strong> Content partner based out of Gainesville, FL focused oncreating photo + video content that helps local and national brands build a stronger connection with their customers.
                </Description>
            </TextContainer>

            <MediumSpacer />
            {/* <HiMinus /> */}
            {/* <AQicon src={aq}/> */}
            <div style={{ width: '35px', borderBottom: '2px solid #000' }} />
            <MediumSpacer />

            <TextContainer>
                <Title>
                    <strong>Book</strong>
                </Title>
            </TextContainer>
            <FormModule />
        </Container>
    )
}

export default About