import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/material";
import Product from "./Product/Product";
import { useTheme } from "@mui/material/styles";

const Products = ({ products, onAddToCart }) => {
  const theme = useTheme();
  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F6F9FC",
        padding: theme.spacing(3),
      }}
    >
      <Box style={{ minHeight: "64px" }} />
      <Container></Container>
      <Grid container justifyContent="center" spacing={3} maxWidth="lg">
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
