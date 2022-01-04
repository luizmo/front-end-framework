import styled from "styled-components";
import { px2rem } from "styles";

const Container = styled.main`
  margin: ${px2rem(45)} auto 0;
  max-width: 1424px;
  padding: 0 20px;
  width: 100%;
`;

const PageTitle = styled.h1`
  color: var(--dark-title);
  margin-bottom: ${px2rem(20)};
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(auto-fit, minmax(${px2rem(150)}, 1fr));
  justify-items: center;
  margin: ${px2rem(20)} 0;
  >img{
    width: 100%;
  }
`;

const Popup = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  button{
    color: var(--white);
    font-size: ${px2rem(30)};
    padding: ${px2rem(10)};
  }
`;

const PopupContent = styled.div`
  padding: ${px2rem(40)};
  p{
    color: var(--white);
    margin: ${px2rem(10)} 0;
    text-align: center;
  }
  img{
    width: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${px2rem(40)};
`;

export{
  Container,
  PageTitle,
  Grid,
  Popup,
  PopupContent,
  CloseButton
}