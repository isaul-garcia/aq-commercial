import React from 'react'
import {
    Wrapper,
    Section,
    VideoWrapper
} from '../Projects.elements'
import { MediumSpacer } from '../../../globalStyles'
import Vimeo from '@u-wave/react-vimeo'

const Home = () => {
    return (
        <>
            <Wrapper>
                <Section>
                    <h2>ArtistProfile - Cognac & Roses</h2>
                    <h4>Orlando, FL based artist Cognac & Roses. His rise and fall within the music industry as he battles with conflicting thoughts about himself.</h4>
                    <MediumSpacer />
                    <VideoWrapper big>
                        <Vimeo
                            video="855168031"
                            responsive
                            loop={true}
                            volume={0}
                            autoplay
                        />
                    </VideoWrapper>
                    <MediumSpacer mobiRemove/>
                </Section>
            </Wrapper>
        </>
    )
}

export default Home;