import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Comments from 'components/comments';
import Loading from 'components/loading';
import UserInfo from 'components/user';
import Post from 'core/types/post';
import { getPostById } from 'core/services/posts';
import {  useParams } from 'shared/components'
import { Body, Container, Header, PostTitle, Section } from './styles';
import Breadcrumb from 'components/breadcrumb';
import { HOME, POSTS } from 'core/routes/constants';

const PostDetail: React.FC = () => {
  const [post, setPost] = useState<Post>();
  const { postId } = useParams<{
    postId: string
  }>();


  useEffect(() => {
    const fetchPost = async () => {
      const remotePost = await getPostById(postId);
      setPost(remotePost);
    }
    fetchPost();
  }, [postId])

  if(!post){
    return <Loading/>
  }

  return(
    <Container>
      <Breadcrumb
        crumbs={[
          <Link to={`${HOME}`}>Home</Link>,
          <Link to={`${POSTS}`}>Posts</Link>,
          <span>{post?.title}</span>
        ]}
      />
      <Section>
        <Header>
          <PostTitle>{post?.title}</PostTitle>
          {post?.userId && <UserInfo userId={`${post?.userId}`}/>}
        </Header>
        <Body>
          <p>{post?.body}</p>
        </Body>
        <Comments />
      </Section>
    </Container>
  );
}

export default PostDetail;