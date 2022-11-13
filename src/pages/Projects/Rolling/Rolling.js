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
                    <h2>Rolling Tin Cafe - Branding Content</h2>
                    <h4>Photo + Video assets for the launch of their new line of cold brew.</h4>
                    <MediumSpacer />
                    <Batch>
                        <ImageFrame src={Img2}
                            ww={'43'} hh={'54'} xx={'2'} yy={'2'}
                            mw={'76'} mh={'32'} mx={'4'} my={'2'}
                        />
                        <ImageFrame src={Img1}
                            ww={'43'} hh={'54'} xx={'48'} yy={'5'}
                            mw={'76'} mh={'32'} mx={'10'} my={'41'}
                        />
                    </Batch>
                    <MediumSpacer/>
                    <VideoWrapper big hh={92}>
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
                            ww={'34'} hh={'44'} xx={'2'} yy={'2'}
                            mw={'76'} mh={'28'} mx={'4'} my={'-2'}
                        />
                        <ImageFrame src={Img12}
                            ww={'24'} hh={'51'} xx={'38'} yy={'10'}
                            mw={'39'} mh={'30'} mx={'4'} my={'64'}
                        />
                        <ImageFrame src={Img3}
                            ww={'24'} hh={'30'} xx={'64'} yy={'3'}
                            mw={'67'} mh={'24'} mx={'18'} my={'33'}
                        />
                    </Batch>
                    <SmallSpacer/>
                    <Batch>
                        <ImageFrame src={Img4}
                            ww={'25'} hh={'68'} xx={'2'} yy={'-6'}
                            mw={'39'} mh={'30'} mx={'48'} my={'2'}
                        />
                        <ImageFrame src={Img6}
                            ww={'35'} hh={'44'} xx={'29'} yy={'8'}
                            mw={'64'} mh={'30'} mx={'20'} my={'55'}
                        />
                        <ImageFrame src={Img9}
                            ww={'21'} hh={'59'} xx={'66'} yy={'0'}
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