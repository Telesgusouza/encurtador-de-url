import styled from "styled-components";
import bgDesktop from "../../assets/images/bg-boost-desktop.svg";
import bgMobile from "../../assets/images/bg-boost-mobile.svg";

export const Container = styled.section``;

export const ContainerSearch = styled.div`
  border-radius: 6px;
  padding: 14px 30px;

  background-color: hsl(257, 27%, 26%);
  background-image: url(${bgDesktop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;

  input {
    border-radius: 5px;
    border: none;

    margin-right: 15px;
    width: 100%;

    padding: 5px 15px;
  }

  button {
    width: 150px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 20px;

    input {
      padding: 10px 15px;
      margin-bottom: 10px;
    }

    button {
      width: 100%;
    }
  }

  @media (max-width: 375px) {
    background-image: url(${bgMobile});
  }
`;


export const ContainerOptions = styled.div``;
