import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode
}

const HeaderStyle = styled.h1`
  position: relative;
  width: max-content;
  font-size: clamp(1rem, 2vw + 1rem, 4rem);
  margin-bottom: 0.5em;
  padding-bottom: 0.25em;

  &::before {
    content: "";
    position: absolute;
    top: 90%;
    right: 0;
    bottom: 2.5%;
    left: 0;
    width: 100%;
    background-color: ${(p) => p.theme.accent};
  }
`;

const Header: React.FC<Props> = ({ children }) => {
  return <HeaderStyle>{children}</HeaderStyle>;
};

export default Header;
