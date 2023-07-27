import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ToggleButtonGroup,
  Stack,
  Avatar,
  Grid,
  ToggleButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = ({ image, name, sizes, colors, price }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]); // Set the default selected color
  const [quantity, setQuantity] = useState(1);

  const handleColorChange = (event, newSelectedColor) => {
    setSelectedColor(newSelectedColor);
  };

  const handleSizeChange = (event, newSelectedSize) => {
    setSelectedSize(newSelectedSize);
    console.log(newSelectedSize);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleAddToCart = () => {
    console.log(selectedColor, selectedSize, name, price,quantity);
  };

  return (
    <Card sx={{ maxWidth: 300, minWidth: 258 }}>
      <CardActionArea>
        <CardMedia component="img" height="300" image={image} alt={name} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            textAlign="center"
          >
            {name}
          </Typography>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <ToggleButtonGroup
                value={selectedSize}
                exclusive
                onChange={handleSizeChange}
              >
                {sizes.map((size) => (
                  <ToggleButton
                    key={size}
                    value={size}
                    sx={{
                      width: "30px",
                      height: "30px",
                      fontSize: "14px",
                      borderRadius: "50%",
                      padding: 0,
                    }}
                  >
                    {size}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Grid>
            <Grid item>
              <ToggleButtonGroup
                value={selectedColor}
                exclusive
                onChange={handleColorChange}
              >
                {colors.map((color) => (
                  <ToggleButton
                    key={color}
                    value={color}
                    sx={{
                      width: "25px",
                      height: "25px",
                      fontSize: "14px",
                      backgroundColor: `${color}!important`,
                      border:
                        color === selectedColor
                          ? "3px solid silver"
                          : "1px solid silver",
                      borderRadius: "10%",
                      padding: 0,
                    }}
                  >
                    {""}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          <Typography variant="body1" textAlign="center">
            Rs. {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <div>
              <Button variant="outlined" onClick={handleDecreaseQuantity} size="small" sx={{minWidth:'20px !important',width:'20px',height:'20px'}}>
                -
              </Button>
              <Typography
                variant="body1"
                component="span"
                sx={{ margin: "0 8px" }}
              >
                {quantity}
              </Typography>
              <Button variant="outlined" onClick={handleIncreaseQuantity} size="small" sx={{minWidth:'20px !important',width:'20px',height:'20px'}}>
                +
              </Button>
            </div>
          </Grid>
          <Grid item>
            <Button
              size="small"
              color="primary"
              variant="contained"
              sx={{ textTransform: "none" }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
