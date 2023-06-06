import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, removeItem } from "../features/cartslice";
import { Box, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
export const Carted = (props) => {
  const dispatch = useDispatch();
  let amount = props.price * props.quantity;
  // console.log(amount)
  let discountamount = Math.floor((amount * props.discount) / 100);
  let totalsubtotal = amount - discountamount;
  const Add = (item) => {
    dispatch(increase(item));
    // console.log(item)
  };
  const Sub = (item) => {
    dispatch(decrease(item));
    // console.log(item);
  };
  const remove = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <>
      <Box p={2}>
        <Card
          sx={{
            m: { xs: "auto", sm: "auto" },
            width: { xs: "250px", sm: "250", md: "250" },
          }}
        >
          <Grid item key={props.id} xs={12} sm={12} md={12}>
            <CardMedia
              component="img"
              height="250px"
              image={props.img}
            ></CardMedia>
            <Typography
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                width: "100%",
              }}
              align="center"
            >
              Brand:{props.brand}
            </Typography>
            <Typography align="center">Pice:{props.price}</Typography>
            <Typography align="center">Discount:{props.discount}%</Typography>
            <Typography align="center">QTY:{props.quantity}</Typography>
            <Button onClick={() => Add(props)} sx={{ color: "black" }}>
              Add
            </Button>
            <Button onClick={() => Sub(props)} sx={{ color: "black" }}>
              Sub
            </Button>
            <Button onClick={() => remove(props.index)} sx={{ color: "black" }}>
              Remove
            </Button>
            <Typography align="center">subTotal:{totalsubtotal}</Typography>
          </Grid>
        </Card>
      </Box>
    </>
  );
};
export const TOTAL = () => {
  const items = useSelector((state) => state.cart.cartSlice.items);
  // console.log(items)
  let totalamount = 0;
  const getTotal = () => {
    items.forEach((element) => {
      let amount = element.price * element.quantity;
      // console.log(amount);
      let total = 0;
      total += amount;
      let discount = Math.floor((total * element.discount) / 100);
      console.log(discount);
      totalamount += total - discount;
      // console.log(totalamount)
    });
  };
  getTotal();
  return (
    <>
      <h2>TOTAL:{totalamount}</h2>
    </>
  );
};
