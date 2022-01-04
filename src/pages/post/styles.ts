import styled from "styled-components";
import { px2rem } from "styles";

const Container = styled.section`
  margin: ${px2rem(20)} auto;
  max-width: 1424px;
  padding: 0 20px;
`;

const ListTitle = styled.h1`
  color: var(--dark-title);
  font-size: ${px2rem(24)};
  margin-bottom: ${px2rem(30)};
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  >a{
    width: 100%;
  }
  @media screen and (min-width: 998px){
    grid-template-columns: repeat(auto-fit, minmax(${px2rem(330)}, 1fr));
  }
`;

export{
  Container,
  Grid,
  ListTitle
}