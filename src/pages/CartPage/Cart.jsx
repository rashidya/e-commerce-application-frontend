import React from "react";
import { Box, Typography, IconButton, Divider ,Button,Grid} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { cartItems } from "../../dummyData/items";

const CartItem = ({ item }) => {
  const { image, name, quantity, price } = item;

  return (
    <Box display="flex" alignItems="center" marginBottom={2} sx={{backgroundColor:'#f1f1f1',padding:'10px',borderRadius:'10px'}}>
      <img
        src={image}
        alt={name}
        style={{ width: "80px", height: "100px", marginRight: "16px" }}
      />
      <Box flex="1">
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
          Qty: x {quantity}
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
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      };
  return (
    (cartItems.length>0?
    <Box>
    
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
        <Divider sx={{ marginBottom: 2 }} />
        <Grid container alignItems="flex-end" sx={{ marginTop: 2 }} flexDirection='column' spacing={2}>
        <Grid item>
          <Typography variant="h6">Total: Rs.{calculateTotal().toFixed(2)}</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Checkout
          </Button>
        </Grid>
      </Grid>
    </Box>
    :
    <div><Typography>
    Your cart is empty.
    </Typography></div>
    )
  );
};

export default Cart;
