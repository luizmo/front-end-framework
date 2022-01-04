import styled from "styled-components";
import { px2rem } from "styles";

const Container = styled.div`
  padding: ${px2rem(20)} ${px2rem(10)} ${px2rem(50)};
`;

const CommentTitle = styled.p`
  color: var(--dark-title);
  font-size: ${px2rem(20)};
  font-weight: 700;
  margin-bottom: ${px2rem(10)};
`;

const CommentWrapper = styled.div`
  border-bottom: 1px solid var(--neutral-grey);
  margin: ${px2rem(10)} 0 ${px2rem(20)};
  padding: ${px2rem(10)} ${px2rem(5)};
`;

const Info = styled.p`
  color: #505F79;
  font-size: ${px2rem(14)};
  font-weight: 700;
  margin-bottom: ${px2rem(5)};
`;

const CommentBody = styled.p`
  color: #000000;
  font-style: italic;
  margin-top: ${px2rem(15)};
  padding: ${px2rem(3)};
`;

export{
  Container,
  CommentTitle,
  CommentWrapper,
  Info,
  CommentBody
}