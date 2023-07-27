import * as Yup from "yup";

// Validation schema for the LoginPage component
export const validationSchemaLogin = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

// Validation schema for the SignupPage component
export const validationSchemaSignup = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  name: Yup.string().required("Name is required"),
});

export const validationSchemaItem = Yup.object().shape({
  itemName: Yup.string().required("Item Name is required"),
  imageURL: Yup.string()
    .required("Image URL is required")
    .url("Please enter a valid URL")
});

export const validationSchemaQty = Yup.object().shape({
  sizeValidationSchema: Yup.string().required("Size is required"),
  colorValidationSchema: Yup.string().required("Color is required"),
  quantityValidationSchema: Yup.number()
    .required("Quantity is required")
    .min(1, "Quantity must be at least 1")
    .integer("Quantity must be an integer"),
});
