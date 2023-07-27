import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { validationSchemaItem } from "../../utils/ValidationSchema/schema";

const AddItem = ({ onAddItem }) => {
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [itemOptions, setItemOptions] = useState([]);

  const handleAddOption = () => {
    const option = {
      size: size,
      color: color,
      quantity: parseInt(quantity),
    };
    setItemOptions((prevOptions) => [...prevOptions, option]);
    resetOption();
  };

  const handleSubmit = (values, { resetForm }) => {
    if (itemOptions.length > 0) {
      const newItem = {
        name: values.itemName,
        image: values.imageURL,
        options: itemOptions,
      };
      onAddItem(newItem);
      resetForm();
    } else {
      console.log("Add items options");
    }
  };

  const handleRemoveOption = (index) => {
    setItemOptions((prevOptions) => prevOptions.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setItemName("");
    setImageURL("");
    resetOption();
    setItemOptions([]);
  };

  const resetOption = () => {
    setSize("");
    setColor("");
    setQuantity("");
  };

  return (
    <Box>
      <h2>Add New Item</h2>
      <Formik
        initialValues={{ itemName: "", imageURL: "" }}
        validationSchema={validationSchemaItem}
        onSubmit={handleSubmit}
      >
        {({ values, touched, errors }) => (
          <Form>
            <Field
              required
              name="itemName"
              as={TextField}
              label="Item Name"
              fullWidth
              margin="normal"
              error={touched.itemName && Boolean(errors.itemName)}
              helperText={touched.itemName && errors.itemName}
              value={values.itemName}
            />
            <Field
              required
              name="imageURL"
              as={TextField}
              label="Image URL"
              fullWidth
              margin="normal"
              error={touched.imageURL && Boolean(errors.imageURL)}
              helperText={touched.imageURL && errors.imageURL}
              value={values.imageURL}
            />
            <Box display="flex" alignItems="center">
              <Formik
                initialValues={{ itemName: "", imageURL: "" }}
                validationSchema={validationSchemaItem}
                onSubmit={handleSubmit}
              >
                {({ values, touched, errors }) => (
                  <Form>
                    <Field
                      required
                      name="size"
                      as={TextField}
                      label="Size"
                      value={size}
                      onChange={(e) => e.target.value}
                      sx={{ marginRight: "10px" }}
                      error={touched.size && Boolean(errors.size)}
                      helperText={touched.size && errors.size}
                    />
                    <Field
                      required
                      name="color"
                      as={TextField}
                      label="Color"
                      value={color}
                      onChange={(e) => e.target.value}
                      sx={{ marginRight: "10px" }}
                      error={touched.color && Boolean(errors.color)}
                      helperText={touched.color && errors.color}
                    />
                    <Field
                      required
                      name="quantity"
                      as={TextField}
                      label="Quantity"
                      type="number"
                      value={quantity}
                      onChange={(e) => e.target.value}
                      sx={{ marginRight: "10px" }}
                      error={touched.quantity && Boolean(errors.quantity)}
                      helperText={touched.quantity && errors.quantity}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={handleAddOption}
                    >
                      Add
                    </Button>
                  </Form>
                )}
              </Formik>
            </Box>

            {itemOptions.map((option, index) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                marginBottom={2}
              >
                <Typography variant="subtitle1" sx={{ flex: 1 }}>
                  Size: {option.size}, Color: {option.color}, Quantity:{" "}
                  {option.quantity}
                </Typography>
                <IconButton
                  color="secondary"
                  onClick={() => handleRemoveOption(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: "10px" }}
            >
              Add Item
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddItem;
