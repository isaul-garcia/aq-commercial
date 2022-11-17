import React from 'react'
import {
    Wrapper,
    Section,
    ImageFrame,
    Batch,
    VideoWrapper
} from '../Projects.elements'
import Img2 from '../../../assets/AriUberti/screengrab3.webp'
import Img3 from '../../../assets/AriUberti/synopsis.png'
import Img4 from '../../../assets/AriUberti/photo1.webp'
import Img7 from '../../../assets/AriUberti/graphic2.webp'
import Img8 from '../../../assets/AriUberti/graphic1.webp'
import { MediumSpacer } from '../../../globalStyles'
import Vimeo from '@u-wave/react-vimeo'

const Home = () => {
    return (
        <>
            <Wrapper>
                <Section>
                    <h2>Mírame - a brief profile on artist AriUberti</h2>
                    <h4>Exploring what it means to allow your uniqueness to shine.</h4>
                    <MediumSpacer />
                    <VideoWrapper big
                        ww={'90'} hh={'88'} xx={'-0.5'} yy={'0'}>
                        <Vimeo
                            video="765432441"
                            responsive
                            loop={true}
                            volume={0}
                        />
                    </VideoWrapper>
                    <MediumSpacer />
                    <VideoWrapper vertical right
                        ww={'48'} hh={'50'} xx={'-0.5'} yy={'0'}>
                        <Vimeo
                            video="765433774"
                            responsive
                            loop={true}
                            volume={0}
                            autoplay
                        />
                    </VideoWrapper>
                    <Batch>
                        <ImageFrame src={Img8}
                            ww={'39.5'} hh={'40'} xx={'49'} yy={'3'}
                            mw={'85'} mh={'24'} mx={'3'} my={'59'}
                        />
                    </Batch>
                    <Batch>
                        <ImageFrame src={Img4}
                            ww={'43'} hh={'100'} xx={'45'} yy={'-9'}
                            mw={'40'} mh={'34'} mx={'48'} my={'8'}
                        />
                    </Batch>
                    <VideoWrapper vertical right third 
                    ww={'41'} xx={'3'} yy={'-69'}>
                        <Vimeo
                            video="765434824"
                            responsive
                            loop={true}
                            volume={0}
                        />
                    </VideoWrapper>
                    <MediumSpacer mobiRemove/>
                    <MediumSpacer mobiRemove/>
                    <MediumSpacer mobiRemove/>
                    <Batch>
                        <ImageFrame src={Img3}
                            ww={'20'} hh={'38'} xx={'14'} yy={'44'}
                            mw={'72'} mh={'20'} mx={'7'} my={'37'}
                        />
                        <ImageFrame src={Img2}
                            ww={'36'} hh={'42'} xx={'50'} yy={'5'}
                            mw={'72'} mh={'20'} mx={'7'} my={'37'}
                        />
                        <ImageFrame src={Img7}
                            ww={'39'} hh={'42'} xx={'46'} yy={'48'}
                            mw={'72'} mh={'20'} mx={'13'} my={'63'}
                        />
                    </Batch>
                    <MediumSpacer mobiRemove/>
                    <MediumSpacer mobiRemove/>
                    <MediumSpacer />
                </Section>
            </Wrapper>
        </>
    )
}

export default Home;