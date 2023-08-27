import React from 'react'
import {
    Wrapper,
    Section,
    ImageFrame,
    Batch,
    VideoWrapper
} from '../Projects.elements'
import Img1 from '../../../assets/KingState/photo1.png'
import Img2 from '../../../assets/KingState/photo2.png'
import Img3 from '../../../assets/KingState/photo3.png'
import Img4 from '../../../assets/KingState/photo4.jpg'
import Img5 from '../../../assets/KingState/photo5.jpg'
import Img6 from '../../../assets/KingState/photo6.jpg'
import { MediumSpacer } from '../../../globalStyles'
import Vimeo from '@u-wave/react-vimeo'

const Home = () => {
    return (
        <>
            <Wrapper>
                <Section>
                    <h2>Local Provisions - Brand Video</h2>
                    <h4>Lifestyle photo + video to represent the restaurant's atmosphere.</h4>
                    <MediumSpacer />
                    <VideoWrapper big>
                        <Vimeo
                            video="858280968"
                            responsive
                            loop={true}
                            volume={0}
                        />
                    </VideoWrapper>
                    <MediumSpacer />
                    <VideoWrapper vertical right third 
                    ww={'26'} xx={'4'} yy={'10'}>
                        <Vimeo
                            video="813899963"
                            responsive
                            loop={true}
                            volume={0}
                            autoplay
                        />
                    </VideoWrapper>
                    <Batch>
                        <ImageFrame src={Img1}
                            ww={'25'} hh={'66'} xx={'32.5'} yy={'9.5'}
                            mw={'56'} mh={'30'} mx={'22'} my={'24'}
                        />
                        <ImageFrame src={Img5}
                            ww={'23'} hh={'77'} xx={'61'} yy={'2'}
                            mw={'85'} mh={'24'} mx={'3'} my={'39'}
                        />
                    </Batch>

                    <VideoWrapper vertical right third 
                    ww={'26'} xx={'4'} yy={'40'}>
                        <Vimeo
                            video="813900220"
                            responsive
                            loop={true}
                            volume={0}
                            autoplay
                        />
                    </VideoWrapper>
                    <Batch>
                        <ImageFrame src={Img4}
                            ww={'25'} hh={'66'} xx={'32.5'} yy={'9.5'}
                            mw={'56'} mh={'30'} mx={'22'} my={'24'}
                        />
                    </Batch>
                    <VideoWrapper vertical right third 
                    ww={'26'} xx={'60'} yy={'-35'}>
                        <Vimeo
                            video="813878221"
                            responsive
                            loop={true}
                            volume={0}
                            autoplay
                        />
                    </VideoWrapper>
                    

                    <MediumSpacer />
                    <VideoWrapper vertical right third 
                    ww={'26'} xx={'4'} yy={'60'}>
                        <Vimeo
                            video="813900397"
                            responsive
                            loop={true}
                            volume={0}
                            autoplay
                        />
                    </VideoWrapper>
                    <Batch>
                        <ImageFrame src={Img3}
                            ww={'25'} hh={'66'} xx={'32.5'} yy={'-5'}
                            mw={'56'} mh={'30'} mx={'22'} my={'24'}
                        />
                        <ImageFrame src={Img2}
                            ww={'23'} hh={'77'} xx={'61'} yy={'18'}
                            mw={'85'} mh={'24'} mx={'3'} my={'39'}
                        />
                        <ImageFrame src={Img6}
                            ww={'25'} hh={'66'} xx={'32.5'} yy={'49.5'}
                            mw={'56'} mh={'30'} mx={'22'} my={'24'}
                        />
                    </Batch>

                    <MediumSpacer />
                    <MediumSpacer />
                    <MediumSpacer />
                    <MediumSpacer />
                    <MediumSpacer />
                    <MediumSpacer />
                    <MediumSpacer />
                    <MediumSpacer />
                </Section>
            </Wrapper>
        </>
    )
}

export default Home;