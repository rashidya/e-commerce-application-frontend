import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

import ProductCard from "../../components/ProductCard/ProductCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { customerJourneyAction } from "../../redux/CutomerJourney/slice";

const ItemsPage = () => {
  const dispatch = useAppDispatch();
  const customerJourney = useAppSelector((state) => state.customerJourney);

  useEffect(() => {
    dispatch(customerJourneyAction.fetchItemList());
  }, []);

  return (
    <div>
      {customerJourney.itemList.length > 0 ? (
        <Grid container direction="row" spacing={5}>
          {customerJourney.itemList.map((item) => (
            <Grid item>
              <ProductCard
                item={item}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>
          <Typography>No items found</Typography>
        </div>
      )}
    </div>
  );
};

export default ItemsPage;
