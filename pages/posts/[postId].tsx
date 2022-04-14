import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
} from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import CommentSection from '../../components/CommentSection';
import Form from '../../components/Form';
import MUIInput from '../../components/Form/MUIInput';
import PostCommentForm from '../../components/Form/PostCommentForm';
import instance from '../../configs/axios-instance';
import { getPostById } from '../../services/post.service';
import { TPost } from '../../types';

interface PostDetailPageProps {
  post?: TPost;
  postId: string;
}

const PostDetailPage = ({ postId }: PostDetailPageProps) => {
  // if (!post) {
  //   return <p>Loading...</p>;
  // }

  // const { title, body, image, author, category, id } = post;

  const { data } = useQuery(['posts', postId], () => getPostById(postId));

  const post = data;

  return (
    <>
      <Card sx={{ marginTop: '4.5rem' }}>
        <CardMedia
          component="img"
          height="300"
          image={post.image}
          alt="Image alt"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.body}
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
      <CommentSection postId={postId} />
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
  const queryClient = new QueryClient();

  const postId = context.params?.postId as string;

  await queryClient.prefetchQuery(['posts', postId], () => getPostById(postId));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      postId,
    },
    revalidate: 3600,
  };

  // try {
  //   const { data } = await instance.get(`/posts/${context?.params?.postId}`);

  //   return {
  //     props: {
  //       post: data,
  //     },
  //     revalidate: 3600,
  //   };
  // } catch (error) {
  //   return {
  //     notFound: true,
  //   };
  // }
};

export default PostDetailPage;
