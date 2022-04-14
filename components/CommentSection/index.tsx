import { Card, CardContent, Divider, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';
import instance from '../../configs/axios-instance';
import Comments from './Comments';
import { TComment } from '../../types';

interface Props {
  postId: string;
}

const CommentSection = ({ postId }: Props) => {
  const { isLoading, data, isError, error } = useQuery(
    'comments',
    async () => await instance.get(`/comments?postId=${postId}`)
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <p>Some thing wrong happened...</p>;
  }

  const comments = data?.data;

  return (
    <Card>
      <CardContent>
        <Typography component="h5">Comments</Typography>
        <Divider />
        <Comments comments={comments} />
      </CardContent>
    </Card>
  );
};

export default CommentSection;
