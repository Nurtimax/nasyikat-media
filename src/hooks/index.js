import { Container, Grid } from '@mui/material';
import ProductDetailsCarousel from './ProductDetailsCarousel';
import ProductDetailsSummary from './ProductDetailsSummary';
import ProductDetailsReview from './ProductDetailsReview';

export default function ProductDetailsPage({ product }) {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <ProductDetailsCarousel product={product} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductDetailsSummary product={product} />
        </Grid>
      </Grid>
      <ProductDetailsReview product={product} />
    </Container>
  );
}
