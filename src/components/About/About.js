import React from 'react';
import {
    Container, Description, Photo, TextContainer, Title
} from './About.elements';
import FormModule from '../FormModule/FormModule';
import { MediumSpacer, SmallSpacer } from '../../globalStyles';
import aqPhoto from '../../assets/AQPhoto.jpg';

const About = () => {
    return (
        <Container>
            <Photo src={aqPhoto} />
            <TextContainer>
                <Description>
                    <strong>Andrés Quiñones (AQ)</strong> Content partner based out of Puerto Rico focused on creating photo + video content that helps local and national brands build a stronger connection with their customers.
                </Description>
            </TextContainer>

            <MediumSpacer />
            <SmallSpacer/>

            <TextContainer>
                <Title>
                    <strong>Contact</strong>
                </Title>
            </TextContainer>
            <FormModule />
        </Container>
    )
}

export default About
