import { List } from '@mui/material';
import { TComment } from '../../../types';
import Comment from './Comment';

interface Props {
  comments: TComment[];
}

const Comments = ({ comments }: Props) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {comments.map((comment) => (
        <Comment key={comment.id} author={comment.author} body={comment.body} />
      ))}
    </List>
  );
};

export default Comments;
