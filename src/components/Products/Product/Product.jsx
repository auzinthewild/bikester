import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

const Product = ({ product, onAddToCart }) => {
  const strippedDesc = product.description.replace(/(<([^>]+)>)/gi, "");

  return (
    <Card
      sx={{
        maxWidth: "100%",
      }}
    >
      <CardMedia
        sx={{
          height: 0,
          paddingTop: "56.25%",
        }}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {strippedDesc}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <IconButton
          aria-label="Add to Cart"
          onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
