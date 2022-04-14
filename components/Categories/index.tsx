import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import Link from 'next/link';

const Categories = () => {
  const categories = ['Photography', 'Education', 'Sports', 'WebDevelopment'];

  return (
    <Card sx={{ position: 'fixed', marginTop: '1.5rem' }}>
      <CardContent>
        <Typography component="h3">Categories</Typography>
        <Divider />
        <List component="nav" aria-label="mailbox folders">
          {categories.map((category) => (
            <ListItem key={category} button>
              <Link href={`/category/${category}`}>{category}</Link>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Categories;
