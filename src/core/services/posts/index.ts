import httpClient from "core/htttp-client";
import Post from "core/types/post";

const getAllPosts = async (filters?: Object): Promise<Post[]> => {
  const posts = (await httpClient.get<Post[]>('posts', {
    params: filters
  })).data;
  return posts;
}

const getPostById = async (postId: string): Promise<Post> => {
  const post = (await httpClient.get<Post>(`posts/${postId}`)).data;
  return post;
}

export {
  getAllPosts,
  getPostById
}