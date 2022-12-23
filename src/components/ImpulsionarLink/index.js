import Button from "../Button";
import * as Styled from "./style";

export default function ImpulsionarLink() {

  function handleLink() {
    console.log('ola mundo')
    window.scrollTo(0, 415);
  }
  return (
    <Styled.Container>
      <div className="center">
        <h4>Impulsione seus links hoje</h4>
        <Styled.ContainerButton onClick={handleLink} ><Button> Iniciar </Button></Styled.ContainerButton>
      </div>
    </Styled.Container>
  );
}
