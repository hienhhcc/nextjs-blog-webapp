import { List } from '@mui/material';
import { TPost } from '../../types';
import PostCard from '../PostCard';

interface PostsProps {
  posts: TPost[];
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <List sx={{ marginTop: '3rem' }}>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </List>
  );
};

export default Posts;
