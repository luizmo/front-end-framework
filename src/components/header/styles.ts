import styled from "styled-components";
import { px2rem } from "styles";

const HeaderWrapper = styled.header`
  background-color: var(--primary);
  height: ${px2rem(64)};
  padding: 0 ${px2rem(20)};
`;

const Nav = styled.nav`
  height: 100%;
  margin: 0 auto;
  max-width: 1424px;
  width: 100%;
`;

const List = styled.ul`
  align-items: center;
  display: flex;
  height: 100%;
  li{
    color: var(--white-text);
    display: flex;
    font-size: ${px2rem(16)};
    font-weight: 500;
    justify-content: center;
    width: ${px2rem(144)};
  }
`;

export{
  HeaderWrapper,
  Nav, 
  List
}