import React from "react";
import styled from "styled-components";
import logo from "../imgs/image 3.png";

const HEADER = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 5px 120px;
`;
const Lista = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;
const Link = styled.a`
  text-decoration: none;
  color: white;
`;

const LinkAtual = styled.a`
  text-decoration: none;
  border-bottom: 2px solid green;
  color: white;
`;

class Header extends React.Component {
  render() {
    return (
      <>
        <HEADER>
          <img src={logo} alt="teste"></img>
          <Lista>
            <li>
              <LinkAtual href="/">Home</LinkAtual>
            </li>
            <li>
              <Link href="/">Personagens</Link>
            </li>
          </Lista>
        </HEADER>
      </>
    );
  }
}
export default Header;