import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Cart({ cart }) {
  const theme = useTheme();
  console.log(cart);

  const EmptyCart = () => (
    <Typography variant="subtitle1">Your shopping cart is empty.</Typography>
  );

  if (!cart.line_items) return "Loading";

  const isEmpty = !cart.line_items.length;

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div
        style={{
          display: "flex",
          marginTop: "10%",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            sx={{
              minWidth: "150px",
              [theme.breakpoints.down("xs")]: {
                marginBottom: "5px",
              },
              [theme.breakpoints.up("xs")]: {
                marginRight: "20px",
              },
            }}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            size="large"
            type="button"
            variant="contained"
            color="primary"
            sx={{
              minWidth: "150px",
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div style={{ minHeight: "64px" }} />
      <Typography variant="h5">Your Shopping Cart</Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
}

export default Cart;
