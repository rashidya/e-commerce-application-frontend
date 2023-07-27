import React from 'react';
import {  Grid, Typography } from '@mui/material';

import ProductCard from '../../components/ProductCard/ProductCard';
import {items} from '../../dummyData/items'


const ItemsPage = () => {

  return (
    (items.length>0?
            <Grid container direction='row' spacing={5}>
                
                {items.map((item)=>
                <Grid item>
                <ProductCard image={item.image} name={item.name} sizes={item.sizes} colors={item.colors} price={item.price}/>
           
                </Grid>
                )}
            </Grid>
      :
      <div><Typography>
        No items found
        </Typography></div>
    ) 
  );
};

export default ItemsPage;
