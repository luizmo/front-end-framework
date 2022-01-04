import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Post from 'core/types/post';
import Loading from 'components/loading';
import PostCard from 'components/postCard';
import { getAllPosts } from 'core/services/posts';
import { Container, Grid, ListTitle } from './styles';
import Breadcrumb from 'components/breadcrumb';
import { HOME } from 'core/routes/constants';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const fetchPosts = async() => {
      const posts = await getAllPosts();
      posts && setPosts(posts)
    }
    fetchPosts();
  }, [])

  if(!posts){
    return <Loading/>
  }

  return(
    <Container>
      <Breadcrumb
        crumbs={[
          <Link to={`${HOME}`}>Home</Link>,
          <span>Posts</span>
        ]}
      />
      <ListTitle>Posts</ListTitle>
      <Grid>
        {posts?.map((post: Post, key: number)=> (
          <PostCard post={post} key={`post-${key}-${post.id}`}/>
        ))}
      </Grid>
    </Container>
  );
}

export default Posts;