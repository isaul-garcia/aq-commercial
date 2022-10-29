import React from 'react'
import {
    Wrapper,
    Section,
    ImageFrame,
    Batch,
    VideoWrapper
} from '../Projects.elements'
import Img1 from '../../../assets/RollingTinCafe/photo1.webp'
import Img2 from '../../../assets/RollingTinCafe/photo2.webp'
import Img3 from '../../../assets/RollingTinCafe/photo3.webp'
import Img4 from '../../../assets/RollingTinCafe/photo4.webp'
import Img6 from '../../../assets/RollingTinCafe/photo6.jpg'
import Img9 from '../../../assets/RollingTinCafe/photo9.webp'
import Img10 from '../../../assets/RollingTinCafe/photo10.webp'
import Img12 from '../../../assets/RollingTinCafe/photo12.webp'
import { MediumSpacer, SmallSpacer } from '../../../globalStyles'
import Vimeo from '@u-wave/react-vimeo';

const Home = () => {
    return (
        <>
            <Wrapper>
                <Section>
                    <Batch>
                        <ImageFrame src={Img2}
                            ww={'35'} hh={'45'} xx={'7'} yy={'2'}
                            mw={'76'} mh={'32'} mx={'4'} my={'2'}
                        />
                        <ImageFrame src={Img1}
                            ww={'35'} hh={'45'} xx={'48'} yy={'5'}
                            mw={'76'} mh={'32'} mx={'10'} my={'41'}
                        />
                    </Batch>
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
                        <ImageFrame src={Img10}
                            ww={'37'} hh={'52'} xx={'4'} yy={'2'}
                            mw={'76'} mh={'28'} mx={'4'} my={'-2'}
                        />
                        <ImageFrame src={Img3}
                            ww={'20'} hh={'28'} xx={'65'} yy={'5'}
                            mw={'67'} mh={'24'} mx={'18'} my={'33'}
                        />
                        <ImageFrame src={Img12}
                            ww={'18'} hh={'44'} xx={'44'} yy={'17'}
                            mw={'39'} mh={'30'} mx={'4'} my={'64'}
                        />
                    </Batch>
                    <SmallSpacer />
                    <Batch>
                        <ImageFrame src={Img4}
                            ww={'20'} hh={'52'} xx={'4'} yy={'2'}
                            mw={'39'} mh={'30'} mx={'48'} my={'2'}
                        />
                        <ImageFrame src={Img6}
                            ww={'35'} hh={'44'} xx={'28.5'} yy={'17'}
                            mw={'64'} mh={'30'} mx={'20'} my={'55'}
                        />
                        <ImageFrame src={Img9}
                            ww={'18'} hh={'48'} xx={'68'} yy={'5'}
                            mw={'39'} mh={'30'} mx={'4'} my={'20'}
                        />
                    </Batch>
                    <MediumSpacer />
                </Section>
            </Wrapper>
        </>
    )
}

export default Home;