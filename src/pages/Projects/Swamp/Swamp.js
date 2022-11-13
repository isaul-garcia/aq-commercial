import React from 'react'
import {
    Wrapper,
    Section,
    ImageFrame,
    Batch,
    VideoWrapper
} from '../Projects.elements'
import Img2 from '../../../assets/SwampRestaurant/photo2.webp'
import Img6 from '../../../assets/SwampRestaurant/photo6.jpg'
import Img7 from '../../../assets/SwampRestaurant/photo7.jpg'
import Img11 from '../../../assets/SwampRestaurant/photo11.jpg'
import Img14 from '../../../assets/SwampRestaurant/photo14.jpg'
import Img15 from '../../../assets/SwampRestaurant/photo15.jpg'
import Img18 from '../../../assets/SwampRestaurant/photo18.jpg'
import { MediumSpacer } from '../../../globalStyles'
import Vimeo from '@u-wave/react-vimeo'

const Home = () => {
    return (
        <>
            <Wrapper>
                <Section>
                    <h2>The Swamp Restaurant - Brand Video</h2>
                    <h4>Lifestyle photo + video to represent the restaurant's atmosphere.</h4>
                    <MediumSpacer />
                    <Batch>
                        <ImageFrame src={Img2}
                            ww={'22'} hh={'42'} xx={'1'} yy={'2'}
                            mw={'39'} mh={'30'} mx={'4'} my={'0'}
                        />
                        <ImageFrame src={Img15}
                            ww={'20'} hh={'55'} xx={'24'} yy={'2'}
                            mw={'75'} mh={'35'} mx={'7'} my={'48'}
                        />
                        <ImageFrame src={Img11}
                            ww={'20'} hh={'25'} xx={'45'} yy={'2'}
                            mw={'75'} mh={'35'} mx={'7'} my={'48'}
                        />
                        <ImageFrame src={Img6}
                            ww={'22'} hh={'42'} xx={'66'} yy={'2'}
                            mw={'39'} mh={'30'} mx={'46'} my={'8'}
                        />
                    </Batch>
                    <Batch>
                        <ImageFrame src={Img7}
                            ww={'22'} hh={'63'} xx={'1'} yy={'-12'}
                            mw={'39'} mh={'30'} mx={'4'} my={'0'}
                        />
                        <VideoWrapper vertical right third
                            ww={'21.75'} hh={'39'} xx={'23'} yy={'0'}>
                            <Vimeo
                                video="763996539"
                                responsive
                                loop={true}
                                volume={0}
                                autoplay
                            />
                        </VideoWrapper>
                        <ImageFrame src={Img14}
                            ww={'20'} hh={'57.5'} xx={'45'} yy={'-29'}
                            mw={'75'} mh={'35'} mx={'7'} my={'48'}
                        />
                        <ImageFrame src={Img18}
                            ww={'22'} hh={'62'} xx={'66'} yy={'-12'}
                            mw={'39'} mh={'30'} mx={'46'} my={'8'}
                        />
                    </Batch>
                    <Batch>
                        <VideoWrapper big>
                            <Vimeo
                                video="763995820"
                                responsive
                                loop={true}
                                volume={0}
                            />
                        </VideoWrapper>
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