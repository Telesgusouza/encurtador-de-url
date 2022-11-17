import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;

  a {
    margin-left: 20px;
    color: hsl(257, 7%, 63%);
    text-decoration: none;
    font-weight: 700;
    font-size: 0.88em;

    transition: all 0.15s ease-in;

    &:hover {
      color: black;
    }
  }
`;

export const ContainerNav = styled.nav`
  display: flex;
  align-items: center;

  nav {
    /* display: flex; */
    margin-left: 10px;
  }

  @media (max-width: 700px) {
    nav {
      display: none;
    }
  }
`;

export const ContainerButton = styled.div`
  @media (max-width: 700px) {
    display: none;

    button {
      display: none;
    }
  }
`;

export const menuLogo = styled.div`
  display: grid;
  grid-gap: 5px;
  width: 30px;
  div {
    height: 3px;
    width: 100%;
    border-radius: 5px;
    background-color: hsl(257, 7%, 63%);
  }
`;

export const ContainerMenu = styled.div`
  position: relative;
  display: none;

  @media (max-width: 700px) {
    display: block;
  }
`;

export const MenuNavigate = styled.menu`
  animation-name: menuAni;
  animation-duration: 2s;
  animation-delay: 1s;

  position: absolute;
  top: 30px;
  right: 0;
  border-radius: 6px;
  padding: 22px 16px;
  background-color: hsl(257, 27%, 26%);

  width: 250px;

  nav {
    display: grid;
    flex-direction: column;
    grid-gap: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid hsl(257, 27%, 46%);
  }

  a {
    margin: 0;
    text-align: center;
    color: white;
  }

  @media (max-width: 450px) {
    width: 92vw;
  }
`;

export const ContainerButtonMenu = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;

  button {
    /* width: 70%; */
    margin-top: 10px;
  }

  @media (max-width: 450px) {
    justify-content: center;
    align-items: center;

    button {
      width: 80%;
    }
  }
`;
