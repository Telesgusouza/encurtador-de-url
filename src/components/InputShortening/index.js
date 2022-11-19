import Button from "../Button";
import * as Styled from "./style";

export default function InputShortening() {
  return (
    <Styled.Container>
      <section className="center">
        <Styled.ContainerSearch>
          <input type="text" placeholder="Encurtar um link aqui..." />
          <Button bd="5">Encurtá-lo</Button>
        </Styled.ContainerSearch>

        <Styled.ContainerOptions>
          <Styled.Option>
            <p>https://www.frontendmentor.io</p>
            <div>
              <span>https://rel.ink/k4lkyk</span>
              <Button bd="4">Copiar</Button>
            </div>
          </Styled.Option>

          <Styled.Option>
            <p>https://www.frontendmentor.iolsiufhherghero</p>
            <div>
              <span>https://rel.ink/k4lkyk</span>
              <Button bd="4">Copiar</Button>
            </div>
          </Styled.Option>

          <Styled.Option>
            <p>https://www.frontendmentor.io</p>
            <div>
              <span>https://rel.ink/k4lkyk</span>
              <Button bd="4">Copiar</Button>
            </div>
          </Styled.Option>
        </Styled.ContainerOptions>
      </section>
    </Styled.Container>
  );
}
