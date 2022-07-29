import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

function Cart({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) {
  const theme = useTheme();

  if (!cart.line_items) return "Loading";

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      Your shopping cart is empty.&nbsp;
      <Link styke={{ textDecoration: "none" }} to="/">
        Add some items!
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
            />
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
            onClick={onEmptyCart}
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
            component={Link}
            to="/checkout"
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
      <Typography
        sx={{
          marginTop: 1,
        }}
        variant="h4"
        gutterBottom
      >
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
}

export default Cart;
