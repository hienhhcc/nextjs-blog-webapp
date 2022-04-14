import instance from '../configs/axios-instance';
import { TComment } from '../types';

export const getFeaturedPosts = async () => {
  const response = await instance.get('/posts?isFeatured=true');
  return response.data;
};

export const getPostsByCategory = async (categoryName: string) => {
  const response = await instance.get(`/posts?category=${categoryName}`);
  return response.data;
};

export const getPostById = async (id: string) => {
  const response = await instance.get(`/posts/${id}`);
  return response.data;
};

export const getCommentByPostId = async (postId: string) => {
  const response = await instance.get(`/comments?postId=${postId}`);
  return response.data;
};

export const addComment = (newComment: TComment) => {
  return instance.post('/comments', newComment);
};
