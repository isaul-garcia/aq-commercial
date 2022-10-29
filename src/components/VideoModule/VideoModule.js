import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import ReactPlayer from 'react-player'
import {
    VModule,
    VContainer,
    VWrapper,
} from './VideoModule.elements';

const VideoModule = ({ giveWidth, giveHeight, customColor, videoURL, fill, pad }) => {
    let [shouldPlay, updatePlayState] = useState(false);

    let handleEnterViewport = function () {
        updatePlayState(true);
    }
    let handleExitViewport = function () {
        updatePlayState(false);
    }

    return (
        <>
            <Waypoint onEnter={handleEnterViewport} onLeave={handleExitViewport}>
                <VModule giveWidth={'800px'} giveHeight={'550px'} pad={'12px'}>
                    <VContainer customColor={'#440044'}>
                        <VWrapper fill={'#440000'} pad={'3px'} giveHeight={'100px'}>
                            <ReactPlayer
                                playing={shouldPlay} loop={true} muted={true} width={'100%'} height={'100%'}
                                url={videoURL}
                                playsinline
                            />
                        </VWrapper>
                    </VContainer>
                </VModule>
            </Waypoint>
        </>
    )
}

export default VideoModule;