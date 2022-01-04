import styled from "styled-components";
import { px2rem } from "styles";

const Container = styled.main`
  margin: ${px2rem(45)} auto 0;
  max-width: 1024px;
  padding: 0 20px;
  width: 100%;
`;

const Section = styled.section``;

const Header = styled.header``;

const PostTitle = styled.h1`
  color: var(--dark-title);
  font-size: ${px2rem(32)};
  margin-bottom: ${px2rem(20)};
`;

const Body = styled.header`
  border-bottom: 1px solid var(--neutral-grey);
  padding: ${px2rem(30)} ${px2rem(10)};
`;


export{
  Container,
  Section,
  Header,
  Body,
  PostTitle
}