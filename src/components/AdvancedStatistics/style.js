import styled from "styled-components";

export const Container = styled.section`
  padding-top: 40px;
  padding-bottom: 100px;
  background-color: hsl(230, 25%, 95%);
`;

export const ContainerContent = styled.article`
  max-width: 400px;
  text-align: center;
  margin: 0 auto;

  h2 {
    color: hsl(260, 8%, 14%);
    margin-bottom: 10px;
    font-size: 1.6em;
  }

  p {
    color: #606060;
    font-size: 0.9em;
  }
`;

export const ContainerOptionsDescriptions = styled.article`
  position: relative;
  margin-top: 70px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const OptionsDescriptions = styled.div`
  background-color: white;
  z-index: 10;
  position: relative;

  height: fit-content;
  min-height: 230px;

  padding: 45px 25px 35px 25px;

  &:nth-child(2) {
    margin-top: 30px;
  }

  &:nth-child(3) {
    margin-top: 55px;
  }

  @media (max-width: 680px) {
    min-height: fit-content;
    text-align: center;
    display: flex;
    flex-direction: column;


    &:nth-child(3) {
      margin-top: 30px;
    }
  }
`;

export const LineOption = styled.div`
  position: absolute;
  top: 50%;
  width: 80%;
  height: 6px;
  background-color: hsl(180, 66%, 49%);

  @media (max-width: 680px) {
    top: 0;
    left: 49%;
    height: 90%;
    width: 5px;
  }
`;

export const ImgContainer = styled.div`
  background-color: hsl(257, 27%, 26%);
  position: absolute;
  top: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;

  img {
    width: 30px;
    object-fit: contain;
  }

  @media (max-width: 680px) {
    position: relative;
    top: -75px;
    margin: 0 auto;
    margin-bottom: -60px;
  }

`;

export const Content = styled.div`
  h3 {
    margin-bottom: 10px;
  }
  p {
    font-size: 0.8em;
    font-weight: 700;
    color: #606060;
  }
`;
