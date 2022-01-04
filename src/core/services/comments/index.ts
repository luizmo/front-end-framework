import httpClient from "core/htttp-client";
import Comment from "core/types/comment";

const getComments = async (filters?: Object): Promise<Comment[]> => {
  const comments = (await httpClient.get<Comment[]>('comments', {
    params: filters
  })).data;
  return comments;
}

const getCommentByPost = async (postId: string): Promise<Comment[]> => {
  const comments = (await httpClient.get<Comment[]>('comments', {
    params:{
      postId
    }
  })).data;
  return comments;
}

export {
  getComments,
  getCommentByPost,
}