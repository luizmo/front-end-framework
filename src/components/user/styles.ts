import styled from "styled-components";
import { px2rem } from "styles";

const Container = styled.div``;

const Info = styled.p`
  color: var(--dark-grey);
  font-size: ${px2rem(14)};
  font-weight: 400;
`;

export{
  Container, 
  Info
}