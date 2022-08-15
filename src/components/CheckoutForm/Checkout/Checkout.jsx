import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  CssBaseline,
} from "@mui/material";
import { commerce } from "../../../lib/commerce";
import { useTheme } from "@mui/material/styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

const steps = ["Shipping address", "Payment details"];

function Checkout({ cart, error, order, onCaptureCheckout }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    console.log(cart);
    if (cart.total_items) {
      const generateToken = async () => {
        console.log("trying to token upp");
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });
          console.log("ok");
          setCheckoutToken(token);
        } catch (error) {
          history.pushState("/");
          console.log(error);
        }
      };
      generateToken();
    }
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    console.log("next");
    console.log(data);
    setShippingData(data);

    nextStep();
  };

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true);
    }, 3000);
  };

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase!</Typography>
          <Divider sx={{ display: 1 }} />
          <Typography variant="subtitle2">
            Order ref: {order.customer_reference}{" "}
          </Typography>
        </div>
        <br />
        <Button component={Link} to="/" variant="outlined" type="button">
          Back to Store
        </Button>
      </>
    ) : isFinished ? (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase!</Typography>
          <Divider sx={{ display: 1 }} />
        </div>
        <br />
        <Button component={Link} to="/" variant="outlined" type="button">
          Back to Store
        </Button>
      </>
    ) : (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );

  if (error) {
    <>
      <Typography variant="h5">Error: {error}</Typography>
      <br />
      <Button component={Link} to="/" variant="outlined" type="button">
        Back to Store
      </Button>
    </>;
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm
        checkoutToken={checkoutToken}
        nextStep={nextStep}
        setShippingData={setShippingData}
        next={next}
      />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
        nextStep={nextStep}
        timeout={timeout}
      />
    );

  return (
    <>
      <CssBaseline />
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
            activeStep={activeStep}
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
