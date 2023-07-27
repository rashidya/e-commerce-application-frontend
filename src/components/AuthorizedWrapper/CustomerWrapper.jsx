import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Tabs, Tab, Container } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ItemsPage from '../../pages/ItemsPage/Items';
import Cart from '../../pages/CartPage/Cart';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:'#ffdae0 !important'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:'gray'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  footer: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    marginTop: 'auto',
  },
  navItems:{
    color:'gray !important'
  }
}));

const LoggedInUserPage = () => {
  const classes = useStyles();

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    console.log(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          Eleganza
          </Typography>
          <Tabs value={selectedTab} onChange={handleTabChange} textColor='white' >
          <Tab value={0} label={<StorefrontIcon/>} className={classes.navItems}/>
          <Tab value={1} label={<ShoppingCartIcon/>} className={classes.navItems}/>
          <Tab value={2} label={<AccountCircleIcon />} className={classes.navItems}/>
        </Tabs>
        </Toolbar>
       
      </AppBar>

      <main className={classes.content}>
        <Toolbar />
        <Container>
          {/* Your main content goes here */}
        
          <Typography variant="body1">
           { (selectedTab===0)?
            <ItemsPage/>:<Cart/>
}
          </Typography>
        </Container>
      </main>

      <footer className={classes.footer}>
        {/* Footer content goes here */}
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Eleganza. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default LoggedInUserPage;
