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
                            autoplay
                        />
                    </VideoWrapper>
                    <MediumSpacer />
                    <Batch>
                        <ImageFrame src={Img7}
                            ww={'32'} hh={'50'} xx={'3'} yy={'17'}
                            mw={'90'} mh={'48'} mx={'0'} my={'-6'}
                        />
                        <ImageFrame src={Img10}
                            ww={'25'} hh={'66'} xx={'36.5'} yy={'9.5'}
                            mw={'56'} mh={'30'} mx={'22'} my={'24'}
                        />
                        <ImageFrame src={Img8}
                            ww={'25'} hh={'29'} xx={'62'} yy={'12'}
                            mw={'85'} mh={'24'} mx={'3'} my={'59'}
                        />
                        <ImageFrame src={Img9}
                            ww={'25'} hh={'29'} xx={'62'} yy={'43'}
                            mw={'85'} mh={'24'} mx={'3'} my={'59'}
                        />
                    </Batch>
                    <VideoWrapper vertical right third 
                    ww={'26'} xx={'36'} yy={'20'}>
                        <Vimeo
                            video="767707944"
                            responsive
                            loop={true}
                            volume={0}
                        />
                    </VideoWrapper>
                    <Batch>
                        <ImageFrame src={Img3}
                            ww={'32'} hh={'50'} xx={'3'} yy={'32'}
                            mw={'79'} mh={'28'} mx={'5'} my={'-5'}
                        />
                        <ImageFrame src={Img5}
                            ww={'24'} hh={'70'} xx={'63'} yy={'22'}
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