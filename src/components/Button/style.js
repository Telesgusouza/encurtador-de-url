import styled from "styled-components";

export const Button = styled.button`
  font-weight: 700;

  background-color: ${props => props.bg?props.bg:'hsl(180, 66%, 49%)'};
  color: ${props=>props.color?props.color:'white'};
  border: none;
  padding: 8px 18px;
  border-radius: ${props=>props.border?`${props.border}px`:'20px'};

  transition: all .2s ease-in-out ;
  cursor: pointer;

  &:hover {
    background-color: ${props=>props.bgHover?props.bgHover:'hsl(179, 56%, 74%)'};
    color: ${props=>props.clHover};
  }
`;
