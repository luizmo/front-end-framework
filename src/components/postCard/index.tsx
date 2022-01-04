import React from 'react';
import UserInfo from 'components/user';
import Post from 'core/types/post';
import { Link } from 'react-router-dom';
import { Card, Tag, CardTitle } from './styles';

interface IPost{
  post: Post
}

const PostCard: React.FC<IPost> = ({post}) => {
  return(
    <Link to={`/post/${post.id}`} title={post.title}>
      <Card>
        <Tag>Post</Tag>
        <CardTitle>{post.title}</CardTitle>
        <UserInfo userId={`${post.userId}`}/>
      </Card>
    </Link>
  );
}

export default PostCard;