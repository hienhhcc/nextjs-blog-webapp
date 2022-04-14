import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
} from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import CommentSection from '../../components/CommentSection';
import Form from '../../components/Form';
import MUIInput from '../../components/Form/MUIInput';
import PostCommentForm from '../../components/Form/PostCommentForm';
import instance from '../../configs/axios-instance';
import { TPost } from '../../types';

interface PostDetailPageProps {
  post: TPost;
}

const PostDetailPage = ({ post }: PostDetailPageProps) => {
  if (!post) {
    return <p>Loading...</p>;
  }

  const { title, body, image, author, category, id } = post;

  return (
    <>
      <Card sx={{ marginTop: '4.5rem' }}>
        <CardMedia component="img" height="300" image={image} alt="Image alt" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: '1.5rem' }}>
        <CardContent>
          <Typography component="h5">Leave a reply</Typography>
          <Divider />
          <PostCommentForm />
        </CardContent>
      </Card>
      <CommentSection postId={id} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await instance.get('/posts');

  const mappedPaths = data.map((post: TPost) => ({
    params: { postId: post.id },
  }));

  return {
    paths: mappedPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { data } = await instance.get(`/posts/${context?.params?.postId}`);

    return {
      props: {
        post: data,
      },
      revalidate: 3600,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default PostDetailPage;
