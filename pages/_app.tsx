import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Container, Grid } from '@mui/material';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import Categories from '../components/Categories';
import { ReactNode, useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

declare module 'react-query/types/react/QueryClientProvider' {
  interface QueryClientProviderProps {
    children?: ReactNode;
  }
}

declare module 'react-query/types/react/Hydrate' {
  interface HydrateProps {
    children?: ReactNode;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>My Blogs</title>
          <meta name="description" content="Free Blogs" />
          <meta
            name="keywords"
            content="Blog, photography, education, sports, webdevelopment"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Layout>
          <Container maxWidth="md">
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Component {...pageProps} />
              </Grid>
              <Grid item xs={4}>
                <Categories />
              </Grid>
            </Grid>
          </Container>
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
