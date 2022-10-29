import React from 'react'
import {
    Wrapper,
    Section,
    ImageFrame,
    Batch,
    VideoWrapper
} from '../Projects.elements'
import Img1 from '../../../assets/HavenHospice/photo1.webp'
import Img2 from '../../../assets/HavenHospice/photo2.webp'
import Img3 from '../../../assets/HavenHospice/photo3.webp'
import { MediumSpacer, SmallSpacer } from '../../../globalStyles'
import Vimeo from '@u-wave/react-vimeo'

const Home = () => {
    return (
        <>
            <Wrapper>
                <Section>
                    <VideoWrapper>
                        <Vimeo
                            video="763984633"
                            responsive
                            loop={true}
                            volume={0}
                            autoplay
                        />
                    </VideoWrapper>
                    <MediumSpacer />
                    <SmallSpacer />
                    <Batch>
                        <ImageFrame src={Img1}
                            ww={'46'} hh={'46'} xx={'4'} yy={'2'}
                            mw={'76'} mh={'22'} mx={'3'} my={'-6'}
                        />
                        <ImageFrame src={Img2}
                            ww={'25'} hh={'27'} xx={'53'} yy={'-3'}                            
                            mw={'76'} mh={'22'} mx={'10'} my={'22'}
                        />
                        <ImageFrame src={Img3}
                            ww={'25'} hh={'27'} xx={'59'} yy={'30'}
                            mw={'76'} mh={'22'} mx={'3'} my={'50'}
                        />
                    </Batch>
                </Section>
            </Wrapper>
        </>
    )
}

export default Home;