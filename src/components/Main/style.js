import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  min-height: 350px;

  @media (max-width: 645px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerContent = styled.div`
  float: left;
  width: 46%;
  padding: 50px 0;

  h1 {
    line-height: 1.14em;
    font-size: 2.4em;
    color: hsl(260, 8%, 14%);
  }

  p {
    font-size: 0.88em;
    color: hsl(257, 7%, 63%);
    font-weight: 500;
    width: 90%;
  }

  button {
    margin-top: 20px;
    min-width: 120px;
  }

  @media (max-width: 645px) {
    width: 100%;
    text-align: center;

    h1 {
      margin-bottom: 14px;
      font-size: 2em;
    }
  }
`;

export const ContainerImg = styled.div`
  float: right;
  height: 300px;

  overflow: hidden;

  img {
    object-fit: contain;
    height: 100%;
  }

  @media (max-width: 920px) {
    margin-top: 20px;
    height: 240px;
  }

  @media (max-width: 796px) {
    height: 200px;
    margin-top: 60px;
  }

  @media (max-width: 645px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`;
