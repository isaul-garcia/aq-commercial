import React from 'react'
import {
    Wrapper,
    Section,
    ImageFrame,
    Batch,
    VideoWrapper
} from '../Projects.elements'
import Img1 from '../../../assets/AriUberti/screengrab4.webp'
import Img2 from '../../../assets/AriUberti/screengrab3.webp'
import Img3 from '../../../assets/AriUberti/synopsis.png'
import Img4 from '../../../assets/AriUberti/photo1.webp'
import Img5 from '../../../assets/AriUberti/photo2.webp'
import Img6 from '../../../assets/AriUberti/screengrab1.webp'
import Img7 from '../../../assets/AriUberti/graphic2.webp'
import { MediumSpacer } from '../../../globalStyles'
import Vimeo from '@u-wave/react-vimeo'

const Home = () => {
    return (
        <>
            <Wrapper>
                <Section>
                    <VideoWrapper>
                        <Vimeo
                            video="763993945"
                            responsive
                            loop={true}
                            volume={0}
                            autoplay
                        />
                    </VideoWrapper>
                    <MediumSpacer />
                    <Batch>
                        <ImageFrame src={Img2}
                            ww={'38'} hh={'50'} xx={'3'} yy={'2'}
                            mw={'79'} mh={'28'} mx={'5'} my={'-5'}
                        />
                        <ImageFrame src={Img3}
                            ww={'18'} hh={'37'} xx={'45'} yy={'25'}
                            mw={'56'} mh={'30'} mx={'22'} my={'24'}
                        />
                        <ImageFrame src={Img1}
                            ww={'20'} hh={'30'} xx={'66'} yy={'5'}
                            mw={'85'} mh={'24'} mx={'3'} my={'59'}
                        />
                    </Batch>
                    <Batch>
                        <ImageFrame src={Img5}
                            ww={'17'} hh={'47'} xx={'3'} yy={'2'}
                            mw={'40'} mh={'34'} mx={'2'} my={'13'}
                        />
                        <ImageFrame src={Img4}
                            ww={'17'} hh={'47'} xx={'24'} yy={'17'}
                            mw={'40'} mh={'34'} mx={'48'} my={'8'}
                        />
                        <ImageFrame src={Img1}
                            ww={'40'} hh={'45'} xx={'46'} yy={'10'}
                            mw={'78'} mh={'23'} mx={'7'} my={'54'}
                        />
                    </Batch>
                    <Batch>
                        <ImageFrame src={Img7}
                            ww={'43'} hh={'49'} xx={'4'} yy={'22'}
                            mw={'78'} mh={'26'} mx={'7'} my={'4'}
                        />
                        <ImageFrame src={Img6}
                            ww={'30'} hh={'32'} xx={'54'} yy={'12'}
                            mw={'72'} mh={'20'} mx={'7'} my={'37'}
                        />
                        <ImageFrame src={Img7}
                            ww={'30'} hh={'32'} xx={'51'} yy={'50'}
                            mw={'72'} mh={'20'} mx={'13'} my={'63'}
                        />
                    </Batch>
                    <MediumSpacer />
                    <MediumSpacer />
                </Section>
            </Wrapper>
        </>
    )
}

export default Home;