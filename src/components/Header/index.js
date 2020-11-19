import React from "react";
import logo from "../../assets/omeletelogo.svg";
import boleto from "../../assets/boleto.png";
import Search from "../Search";

import { Container, Logo, Wrapper, Picture } from "./styles";

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} alt="" />
        <Search />
        <Picture src={boleto} alt="" />
      </Wrapper>
    </Container>
  );
}

export default Header;
