import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { customerJourneyAction } from "../../redux/CutomerJourney/slice";

const CartItem = ({ item }) => {
  const { name, price, quantity, color, size } = item;

  return (
    <Box
      display="flex"
      alignItems="center"
      marginBottom={2}
      sx={{ backgroundColor: "#f1f1f1", padding: "10px", borderRadius: "10px" }}
    >
      <img
        src={"./img1.jpg"}
        alt={name}
        style={{ width: "80px", height: "100px", marginRight: "16px" }}
      />
      <Box flex="1">
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
          Qty: x {quantity}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
          Size: {size}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
          Color: {color}
        </Typography>
      </Box>
      <Typography variant="body1">
        Rs.{(quantity * price).toFixed(2)}{" "}
        <IconButton color="secondary" onClick={console.log("remove")}>
          <DeleteIcon sx={{ color: "crimson" }} />
        </IconButton>
      </Typography>
    </Box>
  );
};

const Cart = () => {
  const dispatch = useAppDispatch();
  const customerJourney = useAppSelector((state) => state.customerJourney);

  const calculateTotal = () => {
    return customerJourney.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckOut = () => {
    const orderItems = customerJourney.cartItems.map((item) => {
      const orderItem = {
        item: item._id,
        size: item.size,
        color: item.color,
        quantity: item.quantity,
      };
      return orderItem;
    });
    const sale = {
      customer: "64c220a20e5c953a9f3619f4",
      totalPrice: calculateTotal().toFixed(2),
      orderItems,
    };
    dispatch(customerJourneyAction.checkout(sale));
  };
  return (
    <Box>
      {customerJourney.cartItems.length > 0 ? (
        customerJourney.cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))
      ) : (
        <div>
          <Grid container height='50vh'>
            <Grid item xs={12} display='flex' alignItems='end' justifyContent='center'>
            <Typography  variant="h6" color='grey'>Add items to your cart.</Typography>
         
            </Grid>
            <Grid item xs={12} display='flex' justifyContent='center'>
            <img src={'./empty-cart.png'} alt="Your Alt Text" width="200" height="200" textAlign='center' />
        
            </Grid>
          </Grid>
         </div>
      )}
      <Divider sx={{ marginBottom: 2 }} />
      <Grid
        container
        alignItems="flex-end"
        sx={{ marginTop: 2 }}
        flexDirection="column"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h6">
            Total: Rs.{calculateTotal().toFixed(2)}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCheckOut}
            disabled={customerJourney.cartItems.length === 0}
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
