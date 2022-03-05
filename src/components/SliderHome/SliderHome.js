import React, {useState} from 'react';
import * as S from './SliderHome.style';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import img0 from '../../assets/img/kotwy/psk_scr_4_4_24-removebg-preview (3).png'
import img1 from '../../assets/img/kotwy/psk_scr_4x4x24_real-removebg-preview.png'
import img2 from '../../assets/img/kotwy/psk_wsp_4_4_24-removebg-preview.png'
import img3 from '../../assets/img/kotwy/pskwst2x2-removebg-preview.png'
import img4 from '../../assets/img/kotwy/pso_wsp_101_750-removebg-preview.png'

const images = [img0, img1, img2, img3, img4];

const SliderHome = () => {
    const [currentItem, setCurrentItem] = useState(0);

    const handleArrowClick = (direction) => {
        direction === 'left' ?
            setCurrentItem(currentItem > 0 ? currentItem - 1 : 4) :
            setCurrentItem(currentItem < 4 ? currentItem + 1 : 0);
    }

    return (
        <S.Wrapper>
            <S.ContentWrapper>
                <ArrowBackIosNewIcon onClick={() => handleArrowClick('left')} />
                <S.HeaderImg src={images[currentItem]} />
                <ArrowForwardIosIcon onClick={() => handleArrowClick('right')} />
            </S.ContentWrapper>
            <S.DotsWrapper>
                {
                    Array.from({length: 5}).map((item, idx) => (
                        <S.Dot onClick={() => setCurrentItem(idx)}
                               key={idx} className={currentItem === idx ? 'active' : ''} />
                    ))
                }
            </S.DotsWrapper>
        </S.Wrapper>
    );
};

export default SliderHome;