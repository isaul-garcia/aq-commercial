import React from 'react'
import {
    Wrapper,
    Section,
    ImageFrame,
    Batch,
    VideoWrapper
} from '../Projects.elements'
import Img3 from '../../../assets/LocalProvisions/photo3.jpg'
import Img5 from '../../../assets/LocalProvisions/photo5.jpg'
import Img7 from '../../../assets/LocalProvisions/photo7.jpg'
import Img8 from '../../../assets/LocalProvisions/photo8.jpg'
import Img9 from '../../../assets/LocalProvisions/photo9.jpg'
import Img10 from '../../../assets/LocalProvisions/photo10.jpg'
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
                            video="767706824"
                            responsive
                            loop={true}
                            volume={0}
                        />
                    </VideoWrapper>
                    <MediumSpacer />
                    <VideoWrapper vertical right third 
                    ww={'26'} xx={'4'} yy={'10'}>
                        <Vimeo
                            video="771795892"
                            responsive
                            loop={true}
                            volume={0}
                            autoplay
                        />
                    </VideoWrapper>
                    <Batch>
                        <ImageFrame src={Img7}
                            ww={'25'} hh={'32'} xx={'5'} yy={'94'}
                            mw={'90'} mh={'48'} mx={'0'} my={'-6'}
                        />
                        <ImageFrame src={Img10}
                            ww={'25'} hh={'66'} xx={'32.5'} yy={'9.5'}
                            mw={'56'} mh={'30'} mx={'22'} my={'24'}
                        />
                        <ImageFrame src={Img8}
                            ww={'25'} hh={'31'} xx={'60'} yy={'10'}
                            mw={'85'} mh={'24'} mx={'3'} my={'59'}
                        />
                        <ImageFrame src={Img9}
                            ww={'25'} hh={'31'} xx={'62'} yy={'44'}
                            mw={'85'} mh={'24'} mx={'3'} my={'59'}
                        />
                    </Batch>
                    <VideoWrapper vertical right third 
                    ww={'26'} xx={'32'} yy={'20'}>
                        <Vimeo
                            video="767707944"
                            responsive
                            loop={true}
                            volume={0}
                        />
                    </VideoWrapper>
                    <Batch>
                        <ImageFrame src={Img3}
                            ww={'25'} hh={'32'} xx={'3'} yy={'69'}
                            mw={'79'} mh={'28'} mx={'5'} my={'-5'}
                        />
                        <ImageFrame src={Img5}
                            ww={'28'} hh={'77'} xx={'60'} yy={'22'}
                            mw={'85'} mh={'24'} mx={'3'} my={'59'}
                        />
                    </Batch>
                    <MediumSpacer  mobiRemove/>
                    <VideoWrapper big yy={'37'}>
                        <Vimeo
                            video="767707459"
                            responsive
                            loop={true}
                            volume={0}
                        />
                    </VideoWrapper>
                    <MediumSpacer />
                </Section>
            </Wrapper>
        </>
    )
}

export default Home;