import Button from '../Button';
import * as Styled from './style';

import imgLogoDesktop from "../../assets/images/illustration-working.svg";


export default function Main() {

    return (
        <Styled.Container className='center' >
            {/* imagem */}
            <Styled.ContainerImg>
                <img src={imgLogoDesktop} />
            </Styled.ContainerImg>
            
            {/* conteudo */}
            <Styled.ContainerContent>

                <h1>Mais do que apenas links mais curtos</h1>
                <p>Construa o reconhecimento de sua marca e obtenha informações detalhadas sobre o desempenho de seus links</p>

                <Button>Iniciar</Button>

            </Styled.ContainerContent>
        </Styled.Container>
    )
}