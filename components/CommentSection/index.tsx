import { Card, CardContent, Divider, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';
import Comments from './Comments';
import { getCommentByPostId } from '../../services/post.service';

interface Props {
  postId: string;
}

const CommentSection = ({ postId }: Props) => {
  const {
    isLoading,
    data: comments,
    isError,
    error,
  } = useQuery('comments', () => getCommentByPostId(postId));

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <p>Some thing wrong happened...</p>;
  }

  return (
    <Card sx={{ marginTop: '1rem' }}>
      <CardContent>
        <Typography component="h5">Comments</Typography>
        <Divider />
        <Comments comments={comments} />
      </CardContent>
    </Card>
  );
};

export default CommentSection;
