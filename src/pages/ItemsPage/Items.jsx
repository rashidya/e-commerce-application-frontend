import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

import ProductCard from "../../components/ProductCard/ProductCard";
import { items } from "../../dummyData/items";
import { fetchAllItems } from "../../services/itemService";

const ItemsPage = () => {
  const [itemList, setItemList] = useState([]);

  const fetchItems = async () => {
    const list = await fetchAllItems();
    setItemList(list);
    console.log(itemList);
  };

  useEffect(() => {
    if(itemList.length===0){
    const fetchItems = async () => {
      try {
        const list = await fetchAllItems();
        setItemList(list);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }
  console.log(itemList);
  });

  return items.length > 0 ? (
    <Grid container direction="row" spacing={5}>
      {itemList.map((item) => (
        <Grid item>
          <ProductCard
            name={item.name}
            stock={item.stock}
            price={item.price}
          />
        </Grid>
      ))}
    </Grid>
  ) : (
    <div>
      <Typography>No items found</Typography>
    </div>
  );
};

export default ItemsPage;
