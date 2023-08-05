import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  MenuItem,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { validationSchemaItem } from "../../utils/ValidationSchema/schema";
import { adminJourneyAction } from "../../redux/AdminJourney/slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { customerJourneyAction } from "../../redux/CutomerJourney/slice";

const AddItem = () => {
  const dispatch = useAppDispatch();
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [itemOptions, setItemOptions] = useState([]);
  const [addItemOpen, setaddItemOpen] = useState(false);

  const clearForm = () => {
    setItemOptions([]);
    setColor("");
    setQuantity("");
    setSize("");
  };

  const handleAddOption = () => {
    const option = {
      size,
      color,
      quantityInStock: parseInt(quantity),
    };
    setItemOptions((prevOptions) => [...prevOptions, option]);
  };

  const handleSubmit = (values, { resetForm }) => {
    if (itemOptions.length > 0) {
      const newItem = {
        name: values.itemName,
        price: values.price,
        stock: itemOptions,
      };
      dispatch(adminJourneyAction.addItem(newItem));
      console.log(newItem);
      clearForm();
      resetForm();
      setaddItemOpen(false);
    } else {
      alert("Add item options");
    }
  };

  const handleRemoveOption = (index) => {
    setItemOptions((prevOptions) => prevOptions.filter((_, i) => i !== index));
  };

  const customerJourney = useAppSelector((state) => state.customerJourney);

  useEffect(() => {
    dispatch(customerJourneyAction.fetchItemList());
  }, []);

  return (
    <Box>
      <h2>Manage Items</h2>
      {!addItemOpen && (
        <Button
          onClick={() => setaddItemOpen(true)}
          variant="contained"
          sx={{ textTransform: "none" }}
        >
          + Add Item
        </Button>
      )}

      {addItemOpen && (
        <Formik
          initialValues={{ itemName: "", price: "" }}
          validationSchema={validationSchemaItem}
          onSubmit={handleSubmit}
        >
          {({ values, touched, errors, handleChange, handleBlur }) => (
            <Form>
              <Field
                required
                name="itemName"
                as={TextField}
                label="Item Name"
                fullWidth
                margin="normal"
                handle
                error={touched.itemName && Boolean(errors.itemName)}
                helperText={touched.itemName && errors.itemName}
                value={values.itemName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Field
                required
                name="price"
                as={TextField}
                type="number"
                label="Price"
                fullWidth
                margin="normal"
                error={touched.price && Boolean(errors.price)}
                helperText={touched.price && errors.price}
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Typography variant="body1" fontWeight={700}>
                Item Options
              </Typography>
              <Box display="flex" alignItems="center" margin="10px 0px">
                <Form>
                  <Field
                    required
                    name="size"
                    as={TextField}
                    select
                    label="Size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    // onBlur={handleBlur}
                    sx={{ marginRight: "10px", width: "100px" }}
                    // error={touched.size && Boolean(errors.size)}
                    // helperText={touched.size && errors.size}
                  >
                    <MenuItem value="S">S</MenuItem>
                    <MenuItem value="M">M</MenuItem>
                    <MenuItem value="L">L</MenuItem>
                  </Field>
                  <Field
                    required
                    name="color"
                    as={TextField}
                    label="Color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    // onBlur={handleBlur}
                    sx={{ marginRight: "10px" }}
                    // error={touched.color && Boolean(errors.color)}
                    // helperText={touched.color && errors.color}
                  />
                  <Field
                    required
                    name="quantity"
                    as={TextField}
                    label="Quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    // onBlur={handleBlur}
                    sx={{ marginRight: "10px" }}
                    // error={touched.quantity && Boolean(errors.quantity)}
                    // helperText={touched.quantity && errors.quantity}
                  />
                  <Button
                    onClick={handleAddOption}
                    variant="contained"
                    sx={{
                      marginTop: "10px",
                      textTransform: "none",
                    }}
                  >
                    Add
                  </Button>
                  {itemOptions?.map((option, index) => (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="center"
                      margin="10px 5px"
                      sx={{
                        backgroundColor: "silver",
                        padding: "5px",
                        borderRadius: "10px",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{ flex: 1, color: "white" }}
                      >
                        Size: {option.size} , Color: {option.color} , Quantity:{" "}
                        {option.quantityInStock}
                      </Typography>
                      <IconButton
                        color="error"
                        onClick={() => handleRemoveOption(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  ))}
                </Form>
              </Box>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  marginTop: "10px",
                  textTransform: "none",
                }}
              >
                Add Item
              </Button>
            </Form>
          )}
        </Formik>
      )}

      <TableContainer sx={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Item Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Options</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customerJourney.itemList?.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  {item.stock.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      Size: {option.size}, Color: {option.color}, Quantity:{" "}
                      {option.quantityInStock}
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  <IconButton
                    color="error"
                    //onClick={() => handleRemoveItem(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  {/* ... Add update button or icon ... */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AddItem;
