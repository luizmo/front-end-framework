import { getCommentByPost } from 'core/services/comments';
import Comment from 'core/types/comment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'shared/components';
import { Container, CommentTitle, CommentWrapper, Info, CommentBody } from './styles';

const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>();
  const { postId } = useParams<{
    postId: string
  }>()
  
  useEffect(() => {
    const fetchComment = async () => {
      const remoteComment = await getCommentByPost(postId)
      setComments(remoteComment);
    }
    fetchComment();
  }, [postId])

  return(
    <Container>
      <CommentTitle>Comentários ({comments?.length})</CommentTitle>
      {comments?.map((comment: Comment, key: number) => (
        <CommentWrapper key={`comment-${key}-${comment.id}`}>
          <Info>{comment.name}</Info>
          <Info>{comment.email}</Info>
          <CommentBody>“{comment.body}”</CommentBody>
        </CommentWrapper>
      ))}
    </Container>
  );
}

export default Comments;