import Button from "../Button";
import * as Styled from "./style";

export default function InputShortening() {
  return (
    <Styled.Container className="center">
      <Styled.ContainerSearch>
        <input type="text" placeholder="Encurtar um link aqui..." />
        <Button bd="5">Encurtá-lo</Button>
      </Styled.ContainerSearch>

      <Styled.ContainerOptions>

      </Styled.ContainerOptions>
    </Styled.Container>
  );
}
