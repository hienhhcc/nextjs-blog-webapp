import { GetStaticPaths, GetStaticProps } from 'next';
import { TPost } from '../../types';
import instance from '../../configs/axios-instance';
import Posts from '../../components/Posts';

interface PostsWithCategoryPageProps {
  posts: TPost[];
}

const PostsWithCategoryPage = ({ posts }: PostsWithCategoryPageProps) => {
  return <Posts posts={posts} />;
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [
      {
        params: { categoryName: 'Photography' },
      },
      {
        params: { categoryName: 'Sports' },
      },
      {
        params: { categoryName: 'WebDevelopment' },
      },
      {
        params: { categoryName: 'Education' },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { data } = await instance.get(
      '/posts?category=' + context.params?.categoryName
    );

    return {
      props: {
        posts: data,
      },
      revalidate: 3600,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default PostsWithCategoryPage;
