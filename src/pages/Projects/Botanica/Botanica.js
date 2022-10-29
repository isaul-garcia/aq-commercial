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
import { MediumSpacer, SmallSpacer } from '../../../globalStyles'
import Vimeo from '@u-wave/react-vimeo'

const Home = () => {
    return (
        <>
            <Wrapper>
                <Section>
                    <SmallSpacer />
                    <VideoWrapper>
                        <Vimeo
                            video="763983911"
                            responsive
                            loop={true}
                            volume={0}
                            autoplay
                        />
                    </VideoWrapper>
                    <MediumSpacer />
                    <Batch>
                        <ImageFrame src={Img1}
                         ww={'45'} hh={'55'} xx={'4'} yy={'2'} 
                         mw={'76'} mh={'53'} mx={'7'} my={'26'}
                         />
                        <ImageFrame src={Img2} 
                        ww={'28'} hh={'45'} xx={'55'} yy={'5'} 
                        mw={'76'} mh={'22'} mx={'7'} my={'-3'}
                        />
                    </Batch>
                </Section>
            </Wrapper>
        </>
    )
}

export default Home;