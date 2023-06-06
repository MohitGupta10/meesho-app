import { Grid } from "@mui/material";
import { Image } from "mui-image";
import { useSelector } from "react-redux";
export const Product = () => {
const filterData = useSelector((state) => state.cart.productsSlice.serach);
  console.log(filterData);
  return (
    <>
      <Grid>
        <Grid></Grid>
      </Grid>
    </>
  );
};
