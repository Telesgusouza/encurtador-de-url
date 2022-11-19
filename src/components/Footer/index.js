import logo from '../../assets/images/logo2.svg';

import facebook from '../../assets/images/icon-facebook.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import pinterest from '../../assets/images/icon-pinterest.svg';
import instagram from '../../assets/images/icon-instagram.svg';

import * as Styled from './style';

export default function Footer() {
    
    return (
        <Styled.Container>
            <div className='center' >
                <Styled.Logo>
                    <img src={logo} />                    
                </Styled.Logo>

                <Styled.ContainerContent>
                    <div>
                        <h5>Característica</h5>
                        <nav>
                            <a href='*' >Encurtamento de links</a>
                            <a href='*' >Links de marca</a>
                            <a href='*' >Análise</a>
                        </nav>
                    </div>

                    <div>
                        <h5>Recursos</h5>
                        <nav>
                            <a href='*' >Blog</a>
                            <a href='*' >Desenvolvedor</a>
                            <a href='*' >Suporte</a>
                        </nav>
                    </div>

                    
                    <div>
                        <h5>Companhia</h5>
                        <nav>
                            <a href='*' >About</a>
                            <a href='*' >Nosso time</a>
                            <a href='*' >carreiras</a>
                            <a href='*' >contato</a>
                        </nav>
                    </div>

                    <Styled.ContainerSocialNetworks>
                        <img src={facebook} />
                        <img src={twitter} />
                        <img src={pinterest} />
                        <img src={instagram} />
                    </Styled.ContainerSocialNetworks>
                </Styled.ContainerContent>

            </div>
        </Styled.Container>
    )
}
