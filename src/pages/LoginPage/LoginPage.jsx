import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Box, TextField, Button, Typography, Link, Container } from '@mui/material';
import { validationSchemaLogin } from '../../utils/ValidationSchema/schema';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
      height: '100vh',
      display:'flex',
      alignItems:'center'
    },
    loginBox:{
        background:'#ffdae0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        height:'60%',width:'100%',
        borderRadius:'10px',
        boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.25)'
    },
    errorText:{
        color:'red'
    },
    form:{
        width:'70%'
    },
  }));

const LoginPage = () => {
    const classes=useStyles()
  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = (values) => {
    // Add login logic here
    // values.username and values.password contain the form input values
    // For example, you can use Axios to send a login request to your backend
    console.log(values);
  };

  return (
    <Container maxWidth="sm" >
         <Box
       className={classes.root}
      >
      <Box className={classes.loginBox}
      >
        <Typography variant="h4">
          Login
        </Typography>
        <Formik initialValues={initialValues} validationSchema={validationSchemaLogin} onSubmit={handleSubmit}>
          <Form className={classes.form}>
            <Box sx={{ marginBottom: 2 ,marginTop: 2 }}>
              <Field as={TextField} fullWidth size="small" variant="outlined" label="Username" name="username" />
              <ErrorMessage name="username" component="div"className={classes.errorText} />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Field as={TextField} fullWidth  size="small" variant="outlined" label="Password" name="password" type="password" />
              <ErrorMessage name="password" component="div" className={classes.errorText}/>
            </Box>
            <Button type="submit" fullWidth size="small" variant="contained" >
              Login
            </Button>
          </Form>
        </Formik>
        <Box sx={{ marginTop: 2 }}>
          <Typography>
            Not registered yet? <Link href="/register">Sign Up</Link>
          </Typography>
        </Box>
      </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
