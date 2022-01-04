import styled from "styled-components";
import { px2rem } from "styles";

const Container = styled.div`
  border: 1px solid var(--neutral-grey);
  border-radius: ${px2rem(8)};
  height: 100%;
  min-height: ${px2rem(160)};
  padding: ${px2rem(16)};
  position: relative;
  transition: border-color 0.3s ease, transform 0.2s ease-in-out, box-shadow 0.2s ease;
  width: 100%;
  >div{
    bottom: ${px2rem(16)};
    position: absolute;
  }
  @media screen and (min-width: 998px){
    width: ${px2rem(260)};
    &:hover{
      border-color: var(--primary);
      box-shadow: 0px ${px2rem(18)} ${px2rem(32)} ${px2rem(14)} rgba(179, 186, 197, 0.3);
      transform: scale(1.02);
    }
  }
`;

const Tag = styled.span`
  color: var(--primary);
  font-size: ${px2rem(14)};
  font-weight: 500;
`;

const AlbumTitle = styled.p`
  color: var(--dark-title);
  display: -webkit-box;
  font-size: ${px2rem(18)};
  font-weight: 500;
  margin: ${px2rem(10)} 0;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export{
  Container,
  Tag,
  AlbumTitle
}