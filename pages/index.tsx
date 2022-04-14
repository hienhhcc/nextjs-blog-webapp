import { Grid } from '@mui/material';
import Categories from '../components/Categories';
import Posts from '../components/Posts';
import instance from '../configs/axios-instance';
import { TPost } from '../types';
interface HomeProps {
  posts: TPost[];
  error: Error | unknown;
}

const Home = ({ posts, error }: HomeProps) => {
  return (
    <> {error ? <p>Something wrong happen...</p> : <Posts posts={posts} />}</>
  );
};

export async function getStaticProps() {
  try {
    const { data } = await instance.get('posts');

    return {
      props: {
        posts: data,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: { error },
    };
  }
}

export default Home;
