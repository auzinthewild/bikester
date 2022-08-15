import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
  Chip,
  Rating,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

const Product = ({ product, onAddToCart }) => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "rgb(3 0 71 / 9%) 0px 1px 3px",
      }}
    >
      <Box textAlign={"center"} position={"relative"} display={"inline-block"}>
        <Chip
          label="10% off"
          size="small"
          color="primary"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "24px",
            padding: "0px 3px",
            zIndex: 1,
            top: "10px",
            left: "10px",
            fontSize: "10px",
            position: "absolute",
          }}
        />
        <Box
          sx={{
            display: "block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: "0px",
            margin: "0px",
            padding: "0px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              boxSizing: "border-box",
              display: "block",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: "0px",
              margin: "0px",
              padding: "100% 0px 0px",
            }}
          >
            <CardMedia
              sx={{
                position: "absolute",
                inset: "0px",
                boxSizing: "border-box",
                padding: "0px",
                border: "none",
                margin: "auto",
                display: "block",
                width: "0px",
                height: "0px",
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
              }}
              image={product.image.url}
              title={product.name}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flex: "1 1 0px",
            flexDirection: "column",
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }} gutterBottom>
            {product.name}
          </Typography>
          <Rating name="rating" value={5} size="small" readOnly />
          <Box
            sx={{
              marginTop: "4px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              {product.price.formatted_with_symbol}
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 400 }}>
              <del>${(product.price.raw * 1.1).toFixed(2)}</del>
            </Typography>
          </Box>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <IconButton
            aria-label="Add to Cart"
            onClick={() => onAddToCart(product.id, 1)}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
};

export default Product;
