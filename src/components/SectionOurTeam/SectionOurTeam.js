import React from 'react';
import * as S from './SectionOurTeam.style';
import startup from '../../assets/img/startup-593341_1920.jpg';

const SectionOurTeam = () => (
    <S.Wrapper>
        {/*<S.LeftWrapper>*/}
        <S.ContentWrapper>
            <S.TextWrapper>
                <h2>Zbudujmy razem mosty!</h2>
                <p>PHU SADDAR jest wyłącznym producentem i dystrybutorem EKOKOTEW SADDAR®.</p>
                <p>Oferujemy idealne ekologiczne produkty przyczyniając się do poszanowania środowiska naturalnego.</p>
                <p>EKOKOTWY SADDAR® są produktami o oryginalnych chronionych prawem rozwiązaniach technicznych, posiadają ochronę prawa autorskiego.</p>
                <button>Nasz zespół</button>
            </S.TextWrapper>
        {/*</S.LeftWrapper>*/}
        <S.ImageWrapper>
            <S.Img src={startup} />
        </S.ImageWrapper>
        </S.ContentWrapper>
    </S.Wrapper>
);

export default SectionOurTeam;