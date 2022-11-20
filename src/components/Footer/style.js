import styled from "styled-components";

export const Container = styled.footer`
  background-color: hsl(260, 8%, 14%);
  padding: 30px 0 40px 0;

  div {
    display: flex;
    justify-content: space-between;

    @media (max-width: 680px) {
      flex-direction: column;
      text-align: center;
    }
  }
`;

export const Logo = styled.div`
  img {
    height: 30px;
    width: fit-content;
  }

  @media (max-width: 680px) {
    margin: 0 auto;
    margin-bottom: 26px;

    img {
        height: 25px;
    }
  }
`;

export const ContainerContent = styled.div`
  width: 70%;

  display: flex;
  justify-content: space-between;

  div {
    display: block;
  }

  nav {
    display: grid;
    grid-gap: 8px;
  }

  h5 {
    color: white;
    margin-bottom: 10px;
  }

  a {
    color: #c0c0c0;
    font-size: 0.8em;
    text-decoration: none;

    &:hover {
        color: hsl(180, 66%, 49%);
      }
  }

  @media (max-width: 780px) {
    width: 76%;

    a {
      font-size: 0.7em;

      
    }

    h5 {
      font-size: 0.75em;
    }
  }

  @media (max-width: 680px) {
    flex-direction: column;
    width: 100%;

    div {
      margin-bottom: 22px;
    }

    h5 {
        margin-bottom: 7px;
    }

    nav {
        grid-gap: 4px;
    }
  }
`;

export const ContainerSocialNetworks = styled.div`
  width: 130px;
  height: 20px;

  img {
    height: 100%;
    margin-left: 14px;
    cursor: pointer;

    &:nth-child(1) {
      margin-left: 0;
    }

    &:hover  svg > path {
        /* color: hsl(180, 66%, 49%); */
        fill: hsl(180, 66%, 49%);
    }
  }

  @media (max-width: 680px) {
    margin: 0 auto;
  }
`;
