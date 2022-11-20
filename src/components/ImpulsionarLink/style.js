import bgDesktop from "../../assets/images/bg-boost-desktop.svg";
import bgMobile from "../../assets/images/bg-boost-mobile.svg";

import styled from "styled-components";

export const Container = styled.section`
  background-color: hsl(257, 27%, 26%);
  background-image: url(${bgDesktop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  text-align: center;

  padding: 30px 0;

  h4 {
    color: white;
    font-size: 1.74em;
  }

  button {
    margin-top: 12px;
    font-size: .96em;
  }

  @media (max-width: 400px) {
    background-image: url(${bgMobile});
  }
`;
