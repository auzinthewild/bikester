import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
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
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
        </div>
        <Box minHeight={"55px"}>
          <Typography variant="caption text" color="textSecondary">
            {strippedDesc}
          </Typography>
        </Box>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "8px",
        }}
      >
        <Typography variant="h6">
          {product.price.formatted_with_symbol}
        </Typography>
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
