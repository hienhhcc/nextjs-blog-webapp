import { Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import {
  StyledHeader,
  StyledNavigation,
  StyledNavigationItem,
  StyledNavigationItems,
} from './styles';

const Header = () => {
  return (
    <StyledHeader>
      <Container
        maxWidth="lg"
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4">
          <Link href="/">MyBlogPost</Link>
        </Typography>
        <StyledNavigation>
          <StyledNavigationItems>
            <StyledNavigationItem>
              <Link href={'/category/Photography'}>Photography</Link>
            </StyledNavigationItem>
            <StyledNavigationItem>
              <Link href={'/category/Sports'}>Sports</Link>
            </StyledNavigationItem>
            <StyledNavigationItem>
              <Link href={'/category/WebDevelopment'}>WebDevelopment</Link>
            </StyledNavigationItem>
            <StyledNavigationItem>
              <Link href={'/category/Education'}>Education</Link>
            </StyledNavigationItem>
          </StyledNavigationItems>
        </StyledNavigation>
      </Container>
    </StyledHeader>
  );
};

export default Header;
