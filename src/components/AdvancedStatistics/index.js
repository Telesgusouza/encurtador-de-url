import * as Styled from "./style";

import graphicImg from '../../assets/images/icon-brand-recognition.svg';
import speedometerImg from '../../assets/images/icon-detailed-records.svg';
import designImg from '../../assets/images/icon-fully-customizable.svg';

export default function AdvancedStatistics() {
  return (
    <Styled.Container>
      <section className="center">
        <Styled.ContainerContent>
          <h2>Estatísticas Avançadas</h2>
          <p>
            acompanhe o desempenho de seus links na web com nosso painel de
            estatísticas avançado.
          </p>
        </Styled.ContainerContent>

        <Styled.ContainerOptionsDescriptions>

          <Styled.OptionsDescriptions>
            <Styled.ImgContainer>
                <img src={graphicImg} alt="icone de grafico" />
            </Styled.ImgContainer>

            <Styled.Content>
                <h3>Reconhecimento de Marca</h3>
                <p>Aumente o reconhecimento da sua marca a cada clique. Links genéricos não significam nada. Os links de marca ajudam a incutir confiança em seu conteúdo.</p>
            </Styled.Content>

          </Styled.OptionsDescriptions>

          <Styled.OptionsDescriptions>
          <Styled.ImgContainer>
                <img src={speedometerImg} alt="icone de velocimetro" />
            </Styled.ImgContainer>

            <Styled.Content>
                <h3>registros detalhados</h3>
                <p>obtenha informações sobre quem está clicando em seus links. saber quando e onde as pessoas interagem com seu conteúdo ajuda a tomar melhores decisões.</p>
            </Styled.Content>

          </Styled.OptionsDescriptions>

          <Styled.OptionsDescriptions>
          <Styled.ImgContainer>
                <img src={designImg} alt="icone de material de artes" />
            </Styled.ImgContainer>

            <Styled.Content>
                <h3>totalmente personalizável</h3>
                <p>melhore o reconhecimento da marca e a descoberta de conteúdo por meio de links personalizáveis, potencializando o envolvimento do público.</p>
            </Styled.Content>

          </Styled.OptionsDescriptions>

          <Styled.LineOption />
        </Styled.ContainerOptionsDescriptions>
      </section>
    </Styled.Container>
  );
}
