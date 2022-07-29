import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@mui/material";
import { commerce } from "../../../lib/commerce";
import { useTheme } from "@mui/material/styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

const steps = ["Shipping address", "Payment details"];

function Checkout({ cart }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (error) {}
    };

    generateToken();
  }, [cart]);

  const Confirmation = () => <div>Confirmation</div>;

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm />
    );

  return (
    <>
      <div style={{ marginTop: "84px" }} />
      <Box
        sx={{
          marginTop: "5%",
          width: "auto",
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(2),
          [theme.breakpoints.up("md")]: {
            width: 600,
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >
        <Paper
          sx={{
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            padding: theme.spacing(2),
            [theme.breakpoints.down("xs")]: {
              width: "100%",
              marginTop: 60,
            },
            [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
              marginTop: theme.spacing(6),
              marginBottom: theme.spacing(6),
              padding: theme.spacing(3),
            },
          }}
        >
          <Typography variant="h5" align="center">
            Checkout
          </Typography>
          <Stepper
            activeeStep={activeStep}
            sx={{ padding: theme.spacing(3, 0, 5) }}
          >
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </Box>
    </>
  );
}

export default Checkout;