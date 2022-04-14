import { GetStaticPaths, GetStaticProps } from 'next';
import { TPost } from '../../types';
import Posts from '../../components/Posts';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getPostsByCategory } from '../../services/post.service';
import Head from 'next/head';

interface PostsWithCategoryPageProps {
  categoryName: string;
  posts?: TPost[];
}

const PostsWithCategoryPage = ({
  categoryName,
}: // posts
PostsWithCategoryPageProps) => {
  const { data: posts } = useQuery(['posts', categoryName], () =>
    getPostsByCategory(categoryName)
  );

  return (
    <>
      <Head>
        <title>All {categoryName} posts</title>
      </Head>
      <Posts posts={posts} />
    </>
  );
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
  const queryClient = new QueryClient();

  const categoryName = context.params?.categoryName;

  await queryClient.prefetchQuery(['posts', categoryName], () =>
    getPostsByCategory(categoryName as string)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      categoryName,
    },
    revalidate: 3600,
  };
  // try {
  //   console.log(context);
  //   const { data } = await instance.get(
  //     '/posts?category=' + context.params?.categoryName
  //   );

  //   return {
  //     props: {
  //       posts: data,
  //     },
  //     revalidate: 3600,
  //   };
  // } catch (error) {
  //   return {
  //     notFound: true,
  //   };
  // }
};

export default PostsWithCategoryPage;
