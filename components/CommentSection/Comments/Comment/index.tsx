import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { TComment } from '../../../../types';

interface CommentProps {
  author: string;
  body: string;
}

const Comment = ({ author, body }: CommentProps) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>U</Avatar>
      </ListItemAvatar>
      <ListItemText primary={author} secondary={body} />
    </ListItem>
  );
};

export default Comment;
