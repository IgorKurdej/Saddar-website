import React from 'react';
import { Player } from 'video-react';
import movie from '../../assets/[BTCLOD.COM] Saddar Eko PL-1080p.mp4';

import YouTube from "react-youtube";
import * as S from './SectionVideo.style'

const SectionVideo = () => {
    return (
        // <Player>
        //     <source src={movie} />
        // </Player>
        <S.Wrapper>
            <S.Video autoPlay={true} loop muted>
                <source src={movie}/>
            </S.Video>
        </S.Wrapper>
    );
};

export default SectionVideo;