import React from "react";
import Grid from "@mui/material/Grid";
import Product from "./Product/Product";
import { useTheme } from "@mui/material/styles";

const Products = ({ products, onAddToCart }) => {
  const theme = useTheme();
  return (
    <main
      style={{
        flexGrow: 1,
        backgroundColor: theme.palette.grey[200],
        padding: theme.spacing(3),
      }}
    >
      <div style={{ minHeight: "64px" }} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
