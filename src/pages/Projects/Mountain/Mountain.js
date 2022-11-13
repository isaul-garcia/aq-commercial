import React from 'react'
import {
    Wrapper,
    Section,
    ImageFrame,
    Batch,
    VideoWrapper
} from '../Projects.elements'
import Img1 from '../../../assets/MountainViewWater/photo1.jpg'
import Img2 from '../../../assets/MountainViewWater/photo2.JPG'
import Img3 from '../../../assets/MountainViewWater/photo3.JPG'
import Img4 from '../../../assets/MountainViewWater/photo4.JPG'
import Img5 from '../../../assets/MountainViewWater/photo5.JPG'
import { MediumSpacer } from '../../../globalStyles'
import Vimeo from '@u-wave/react-vimeo'

const Home = () => {
    return (
        <>
            <Wrapper>
                <Section>
                    <h2>Mountain View Water - Social Media Ad</h2>
                    <h4>Lifestyle content for a premium bottled water brand.</h4>
                    <MediumSpacer />
                    <VideoWrapper big hh={92}>
                        <Vimeo
                            video="763990788"
                            responsive
                            loop={true}
                            volume={0}
                            autoplay
                        />
                    </VideoWrapper>
                    <MediumSpacer/>
                    <Batch>
                        <ImageFrame src={Img3}
                            ww={'27'} hh={'77'} xx={'4'} yy={'2'}
                            mw={'46'} mh={'38'} mx={'4'} my={'2'}
                        />                        
                        <ImageFrame src={Img4}
                            ww={'27'} hh={'77'} xx={'62'} yy={'2'}
                            mw={'46'} mh={'38'} mx={'33'} my={'46'}
                        />
                        <ImageFrame src={Img5}
                            ww={'27'} hh={'77'} xx={'33'} yy={'8'}
                            mw={'46'} mh={'38'} mx={'33'} my={'46'}
                        />
                    </Batch>
                    <MediumSpacer mobiRemove/>
                    <Batch>
                        <ImageFrame src={Img1}
                            ww={'27'} hh={'77'} xx={'19'} yy={'20'}
                            mw={'46'} mh={'38'} mx={'4'} my={'0'}
                        />
                        <ImageFrame src={Img2}
                            ww={'27'} hh={'77'} xx={'48'} yy={'20'}
                            mw={'46'} mh={'38'} mx={'38'} my={'43'}
                        />
                    </Batch>
                    <MediumSpacer mobiRemove/>
                    <MediumSpacer mobiRemove/>
                    <MediumSpacer mobiRemove/>
                    <MediumSpacer />
                </Section>
            </Wrapper>
        </>
    )
}

export default Home;