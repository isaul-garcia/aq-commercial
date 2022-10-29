import React from 'react'
import {
    Wrapper,
    Section,
    ImageFrame,
    Batch,
    VideoWrapper
} from '../Projects.elements'
import Img1 from '../../../assets/SwampRestaurant/photo1.webp'
import Img2 from '../../../assets/SwampRestaurant/photo2.webp'
import Img5 from '../../../assets/SwampRestaurant/photo5.jpg'
import Img6 from '../../../assets/SwampRestaurant/photo6.jpg'
import Img7 from '../../../assets/SwampRestaurant/photo7.jpg'
import Img8 from '../../../assets/SwampRestaurant/photo8.jpg'
import Img9 from '../../../assets/SwampRestaurant/photo9.jpg'
import Img11 from '../../../assets/SwampRestaurant/photo11.jpg'
import Img12 from '../../../assets/SwampRestaurant/photo12.jpg'
import Img13 from '../../../assets/SwampRestaurant/photo13.jpg'
import Img14 from '../../../assets/SwampRestaurant/photo14.jpg'
import Img15 from '../../../assets/SwampRestaurant/photo15.jpg'
import Img18 from '../../../assets/SwampRestaurant/photo18.jpg'
import { MediumSpacer, SmallSpacer } from '../../../globalStyles'
import Vimeo from '@u-wave/react-vimeo'

const Home = () => {
    return (
        <>
            <Wrapper>
                <Section>
                    <SmallSpacer />
                    <Batch>
                        <ImageFrame src={Img18}
                            ww={'22'} hh={'60'} xx={'5'} yy={'2'}
                            mw={'39'} mh={'30'} mx={'4'} my={'0'}
                        />
                        <ImageFrame src={Img2}
                            ww={'22'} hh={'45'} xx={'34'} yy={'9'}
                            mw={'75'} mh={'35'} mx={'7'} my={'48'}
                        />
                        <ImageFrame src={Img15}
                            ww={'22'} hh={'60'} xx={'63'} yy={'2'}
                            mw={'39'} mh={'30'} mx={'46'} my={'8'}
                        />
                    </Batch>
                    <MediumSpacer />
                    <SmallSpacer />
                    <VideoWrapper>
                        <Vimeo
                            video="763995820"
                            responsive
                            loop={true}
                            volume={0}
                            autoplay
                        />
                    </VideoWrapper>
                    <MediumSpacer />
                    <Batch>
                        <ImageFrame src={Img8}
                            ww={'33'} hh={'45'} xx={'10'} yy={'2'}
                            mw={'76'} mh={'32'} mx={'4'} my={'2'}
                        />
                        <ImageFrame src={Img11}
                            ww={'33'} hh={'45'} xx={'48'} yy={'9'}
                            mw={'76'} mh={'32'} mx={'10'} my={'41'}
                        />
                    </Batch>
                    <SmallSpacer />
                    <VideoWrapper vertical right third>
                        <Vimeo
                            video="763996539"
                            responsive
                            loop={true}
                            volume={0}
                            autoplay
                        />
                    </VideoWrapper>
                    <Batch>
                        <ImageFrame src={Img1}
                            ww={'22'} hh={'60'} xx={'4'} yy={'0'}
                            mw={'69'} mh={'43'} mx={'10'} my={'52'}
                        />
                        <ImageFrame src={Img5}
                            ww={'22'} hh={'45'} xx={'33'} yy={'6'}
                            mw={'69'} mh={'43'} mx={'10'} my={'52'}
                        />
                    </Batch>
                    <SmallSpacer />
                    <Batch>
                        <ImageFrame src={Img6}
                            ww={'28'} hh={'36'} xx={'4'} yy={'18'}
                            mw={'39'} mh={'30'} mx={'4'} my={'19'}
                        />
                        <ImageFrame src={Img7}
                            ww={'22'} hh={'60'} xx={'36'} yy={'3'}
                            mw={'39'} mh={'30'} mx={'46'} my={'27'}
                        />
                        <ImageFrame src={Img13}
                            ww={'24'} hh={'35'} xx={'62'} yy={'7'}
                            mw={'76'} mh={'22'} mx={'10'} my={'64'}
                        />
                    </Batch>
                    <MediumSpacer />
                    <Batch>
                        <ImageFrame src={Img12}
                            ww={'22'} hh={'60'} xx={'5'} yy={'2'}                            
                            mw={'76'} mh={'32'} mx={'4'} my={'5'}
                        />
                        <ImageFrame src={Img9}
                            ww={'22'} hh={'60'} xx={'63'} yy={'2'}
                            mw={'76'} mh={'32'} mx={'10'} my={'44'}
                        />
                        <ImageFrame src={Img14}
                            ww={'22'} hh={'60'} xx={'34'} yy={'9'}                          
                            mw={'76'} mh={'32'} mx={'4'} my={'5'}
                        />
                    </Batch>
                    <MediumSpacer />
                </Section>
            </Wrapper>
        </>
    )
}

export default Home;