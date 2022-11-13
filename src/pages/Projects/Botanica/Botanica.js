import React from 'react'
import {
    Wrapper,
    Section,
    ImageFrame,
    Batch,
    VideoWrapper
} from '../Projects.elements'
import Img1 from '../../../assets/Botanica.co/photo1.webp'
import Img2 from '../../../assets/Botanica.co/photo2.webp'
import { MediumSpacer } from '../../../globalStyles'
import Vimeo from '@u-wave/react-vimeo'

const Home = () => {
    return (
        <>
            <Wrapper>
                <Section>
                    <h2>Botanica.co Brand Video</h2>
                    <h4>A candle brand that’s making an impact.</h4>
                    <MediumSpacer />
                    <VideoWrapper big>
                        <Vimeo
                            video="763983911"
                            responsive
                            loop={true}
                            volume={0}
                            autoplay
                        />
                    </VideoWrapper>
                    <MediumSpacer mobiRemove/>
                    <MediumSpacer />
                    <Batch>
                        <ImageFrame src={Img1}
                         ww={'32'} hh={'75'} xx={'5'} yy={'5'} 
                         mw={'76'} mh={'53'} mx={'7'} my={'26'}
                         />
                        <ImageFrame src={Img2} 
                        ww={'48'} hh={'46'} xx={'37'} yy={'18'} 
                        mw={'76'} mh={'22'} mx={'7'} my={'-3'}
                        />
                    </Batch>
                    <MediumSpacer mobiRemove/>
                    <MediumSpacer />
                </Section>
            </Wrapper>
        </>
    )
}

export default Home;