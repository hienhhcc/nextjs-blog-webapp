import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';

interface PostCardProps {
  id: string;
  title: string;
  body: string;
  category: string;
  author: string;
  image: string;
}

const PostCard = ({
  author,
  body,
  category,
  id,
  image,
  title,
}: PostCardProps) => {
  const router = useRouter();

  return (
    <Card sx={{ marginTop: '1rem' }}>
      <CardMedia component="img" height="140" image={image} alt="Image alt" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body.substring(0, 200)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() => router.push('/posts/' + id)}
        >
          Continue Reading
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
