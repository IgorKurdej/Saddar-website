import React from 'react';
import * as S from './AboutUsSection.style';
import SliderHome from "../SliderHome/SliderHome";

const AboutUsSection = () => (
    <>
        {/*<S.Header>O nas</S.Header>*/}
        <S.Wrapper>
            <S.LeftWrapper>
                <S.TextWrapper>
                    <h2>
                        SADDAR to znacznie więcej niż small business “made in Poland”
                    </h2>
                    <p>
                        Opracowaliśmy i wdrożyliśmy technologię wytwarzania kompozytu PET modyfikowanego kilkoma składnikami
                        chemicznymi i wzmacnianego włóknem szklanym.
                    </p>
                    <p>
                        PHU SADDAR jest wyłącznym producentem i dystrybutorem EKOKOTEW SADDAR®. Oferujemy idealne ekologiczne produkty przyczyniając się do poszanowania środowiska naturalnego. EKOKOTWY SADDAR® są produktami o oryginalnych chronionych prawem rozwiązaniach technicznych, posiadają ochronę prawa autorskiego. Dariusz Sadowiński - właściciel PHU SADDAR jest twórcą i wyłącznym właścicielem praw autorskich kompozytowych EKOKOTEW SADDAR®.
                    </p>
                    <p>
                        Produkcja metodą wtrysku zapewnia absolutną powtarzalność i wyższą wytrzymałość od konkurencyjnych wyrobów z blachy stalowej.
                    </p>
                    <button>Nasze specjalizacje</button>
                </S.TextWrapper>
            </S.LeftWrapper>
            <S.SliderWrapper>
                <S.Stripe height={'15%'} color={true} />
                <S.Stripe height={'10%'} />
                <S.Stripe height={'20%'} color={true} />
                <S.Stripe height={'15%'} />
                <S.Stripe height={'40%'} color={true} />
                <S.SliderContent>
                    <SliderHome />
                </S.SliderContent>
            </S.SliderWrapper>
        </S.Wrapper>
    </>
);

export default AboutUsSection;