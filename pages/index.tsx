import Posts from '../components/Posts';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { TPost } from '../types';
import { getFeaturedPosts } from '../services/post.service';
interface HomeProps {
  posts: TPost[];
  error: Error | unknown;
}

const Home = ({ error }: HomeProps) => {
  const { data: posts } = useQuery('posts', getFeaturedPosts);

  return (
    <> {error ? <p>Something wrong happen...</p> : <Posts posts={posts} />}</>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('posts', getFeaturedPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3600,
  };
  // try {
  //   const { data } = await instance.get('posts');

  //   return {
  //     props: {
  //       posts: data,
  //     },
  //     revalidate: 60,
  //   };
  // } catch (error) {
  //   return {
  //     props: { error },
  //   };
  // }
}

export default Home;
