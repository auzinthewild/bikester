import React from "react";
import Grid from "@mui/material/Grid";
import Product from "./Product/Product";
import { useTheme } from "@mui/material/styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "$5",
    image:
      "https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_1920/fl_lossy,pg_1/n9mhxly6ltmwiinrmzu5/wmns-air-jordan-1-retro-high-atmpsphere-lead?fimg-ssr-default",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple macbook",
    price: "$5",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gallery3-20201110?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1632937845000",
  },
];

const Products = () => {
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
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
