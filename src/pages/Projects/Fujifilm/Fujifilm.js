import React from 'react'
import {
    Wrapper,
    Section,
    ImageFrame,
    Batch,
    VideoWrapper
} from '../Projects.elements'
import Img2 from '../../../assets/FujifilmInstaxSQ1/photo1-transparent.png'
import { MediumSpacer } from '../../../globalStyles'
import Vimeo from '@u-wave/react-vimeo'

const Home = () => {
    return (
        <>
            <Wrapper>
                <Section>
                    <VideoWrapper>
                        <Vimeo
                            video="763985882"
                            responsive
                            loop={true}
                            volume={0}
                            autoplay
                        />
                    </VideoWrapper>
                    <MediumSpacer />
                    <MediumSpacer />
                    <VideoWrapper vertical>
                        <Vimeo
                            video="763992097"
                            responsive
                            loop={true}
                            volume={0}
                            autoplay
                        />
                    </VideoWrapper>
                    <MediumSpacer />
                    <Batch vertical shrink>
                        <ImageFrame src={Img2} 
                        ww={'50'} hh={'55'} xx={'40'} yy={'-70'} 
                        mw={'98'} mh={'22'} mx={'-4'} my={'8'}
                        />
                    </Batch>
                </Section>
            </Wrapper>
        </>
    )
}

export default Home;