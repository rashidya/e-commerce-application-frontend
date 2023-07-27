import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, TextField, Button, Typography, Link, Container } from '@mui/material';
import { validationSchemaSignup } from '../../utils/ValidationSchema/schema';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  signupBox: {
    background: '#ffdae0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.25)',
    padding: '1rem',
  },
  header: {
    marginBottom: '1rem',
  },
  form: {
    width: '70%',
  },
  errorText: {
    color: 'red',
  },
  submitButton: {
    backgroundColor: theme.palette.success.main,
    marginTop: '1rem',
  },
}));

const SignupPage = () => {
  const classes = useStyles();

  const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    username: '',
    password: '',
  };

  const handleSubmit = (values) => {
    // Add sign-up logic here
    // values contain the form input values
    console.log(values);
  };

  return (
    <Container maxWidth="sm">
      <Box className={classes.root}>
        <Box className={classes.signupBox}>
          <Typography variant="h4" className={classes.header}>
            Sign Up
          </Typography>
          <Formik initialValues={initialValues} validationSchema={validationSchemaSignup} onSubmit={handleSubmit}>
            <Form className={classes.form}>
              <Box sx={{ marginBottom: 2,marginTop:2 }}>
                <Field as={TextField} fullWidth size="small" variant="outlined" label="Name" name="name" />
                <ErrorMessage name="name" component="div" className={classes.errorText} />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <Field as={TextField} fullWidth size="small" variant="outlined" label="Email" name="email" />
                <ErrorMessage name="email" component="div" className={classes.errorText} />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <Field as={TextField} fullWidth size="small" variant="outlined" label="Phone Number" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" component="div" className={classes.errorText} />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <Field as={TextField} fullWidth size="small" variant="outlined" label="Address" name="address" />
                <ErrorMessage name="address" component="div" className={classes.errorText} />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <Field as={TextField} fullWidth size="small" variant="outlined" label="Username" name="username" />
                <ErrorMessage name="username" component="div" className={classes.errorText} />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <Field as={TextField} fullWidth size="small" variant="outlined" label="Password" name="password" type="password" />
                <ErrorMessage name="password" component="div" className={classes.errorText} />
              </Box>
              <Button type="submit" fullWidth size="small" variant="contained" className={classes.submitButton}>
                Sign Up
              </Button>
            </Form>
          </Formik>
          <Box sx={{ marginTop: 2 }}>
            <Typography>
              Already have an account? <Link href="/login">Login</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignupPage;
