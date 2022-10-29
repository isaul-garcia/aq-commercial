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
                    <VideoWrapper>
                        <Vimeo
                            video="763990788"
                            responsive
                            loop={true}
                            volume={0}
                            autoplay
                        />
                    </VideoWrapper>
                    <MediumSpacer />
                    <Batch>
                        <ImageFrame src={Img3}
                            ww={'24'} hh={'62'} xx={'4'} yy={'2'}
                            mw={'46'} mh={'38'} mx={'4'} my={'2'}
                        />                        
                        <ImageFrame src={Img4}
                            ww={'24'} hh={'62'} xx={'62'} yy={'2'}
                            mw={'46'} mh={'38'} mx={'33'} my={'46'}
                        />
                        <ImageFrame src={Img5}
                            ww={'24'} hh={'62'} xx={'33'} yy={'8'}
                            mw={'46'} mh={'38'} mx={'33'} my={'46'}
                        />
                    </Batch>
                    <MediumSpacer />
                    <Batch>
                        <ImageFrame src={Img1}
                            ww={'24'} hh={'62'} xx={'19'} yy={'8'}
                            mw={'46'} mh={'38'} mx={'4'} my={'0'}
                        />
                        <ImageFrame src={Img2}
                            ww={'24'} hh={'62'} xx={'48'} yy={'8'}
                            mw={'46'} mh={'38'} mx={'38'} my={'43'}
                        />
                    </Batch>
                    <MediumSpacer />
                </Section>
            </Wrapper>
        </>
    )
}

export default Home;