import * as Styled from "./style";

import logo from "../../assets/images/logo.svg";

import Button from "../Button";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu((p) => !p);
  }

  return (
    <Styled.Container className="center">
      <Styled.ContainerNav>
        <img src={logo} alt="logo do site" />
        <nav>
          <a href="*">Recursos</a>
          <a href="*">Preços</a>
          <a href="*">Recursos</a>
        </nav>
      </Styled.ContainerNav>
      <Styled.ContainerButton>
        <Button
          bg="white"
          bgHover="none"
          cl="hsl(257, 7%, 63%)"
          clHover="black"
        >
          Conecte-se
        </Button>
        <Button>inscrever-se</Button>
      </Styled.ContainerButton>

      <Styled.ContainerMenu>
        <Styled.menuLogo onClick={handleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </Styled.menuLogo>

        {menu && (
          <Styled.MenuNavigate>
            <nav>
              <a href="*">Recursos</a>
              <a href="*">Preços</a>
              <a href="*">Recursos</a>
            </nav>

            <Styled.ContainerButtonMenu>
              <Button
                bg="hsl(257, 27%, 26%)"
                bgHover="none"
                cl="white"
                clHover="white"
              >
                Conecte-se
              </Button>
              <Button>inscrever-se</Button>
            </Styled.ContainerButtonMenu>
          </Styled.MenuNavigate>
        )}
      </Styled.ContainerMenu>
    </Styled.Container>
  );
}
