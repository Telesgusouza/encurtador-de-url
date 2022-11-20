import styled from "styled-components";
import bgDesktop from "../../assets/images/bg-boost-desktop.svg";
import bgMobile from "../../assets/images/bg-boost-mobile.svg";

export const Container = styled.section`
  background-color: hsl(230, 25%, 95%);
  margin-top: 20px;

  section {
    position: relative;
  }
`;

export const ContainerSearch = styled.div`
  width: 100%;
  position: relative;
  top: -30px;

  border-radius: 6px;
  padding: 20px 30px;

  background-color: hsl(257, 27%, 26%);
  background-image: url(${bgDesktop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;

  input {
    border-radius: 5px;
    border: none;

    border:${props=>props.border?'1px solid red':'none'} ; // 1px solid red

    margin-right: 15px;
    width: 100%;

    padding: 5px 15px;

    &:focus {
      outline: 0;
    }
  }

  div {
    width: fit-content;
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

export const ContainerOptions = styled.div`
  width: 100%;
  margin-top: -14px;

  position: relative;
  display: flex;
  flex-direction: column;

  padding-bottom: 20px;

  box-sizing: border-box;
`;

export const Option = styled.div`
  background-color: white;
  width: 100%;

  margin-bottom: 10px;
  padding: 8px 20px;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    max-width: 100%;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  div {
    width: fit-content;
    display: flex;
    justify-content: end;
    margin-left: 14px;
  }

  button {
    font-size: 0.7em;
    padding: 5px;
    width: 80px;
    margin-left: 15px;
  }

  span {
    color: hsl(180, 66%, 49%);
    font-size: 0.9em;
    width: 70%;
    text-align: right;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 0;
    height: 130px;
    position: relative;
    margin-bottom: 20px;

    p {
      padding: 10px;
      border-bottom: 1px solid #c9c9c9;
      width: 100%;
    }

    div {
      position: absolute;
      bottom: 0;
      left: -14px;
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      padding-left: 0;
      padding-right: 15px;
      text-align: none;
    }

    span {
      text-align: left;
      padding-left: 14px;
      width: 100%;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    button {
      margin-top: 10px;
      width: auto;
    }
  }
`;
