import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Container, Grid } from '@mui/material';
import Categories from '../components/Categories';

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  );
}

export default MyApp;
