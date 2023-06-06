import { Carted } from "../carted";
import { useDispatch, useSelector } from "react-redux";
import {CardMedia, Grid } from "@mui/material";
import { Box, Container, Typography } from "@mui/material";
import { clearItem } from "../../features/cartslice";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Footer } from "../footer/footer";
import { TOTAL } from "../carted";
export const CartPage = () => {
  let dispatch = useDispatch();
  let items = useSelector((state) => state.cart.cartSlice.items);
  const navigate = useNavigate();
  const viewProduct = () => {
    navigate("/");
    window.location.reload(true);
  };
  const addMore = () => {
    navigate("/");
  };
  const cleardata = (item) => {
    dispatch(clearItem());
  };
  const payment = () => {
    alert("Payment Confirmation - Successful Transaction");
    dispatch(clearItem());
    navigate("/");
  };
  return (
    <Box>
      <Typography
        variant="h1"
        align="center"
        sx={{ fontSize: { xs: "50px", sm: "70px" } }}
      >
        SHOPING CART
      </Typography>
      {items.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            image="https://images.meesho.com/images/pow/empty-cart.png"
            alt=""
            // height="600px"
            sx={{ width: "50%", m: "auto" }}
          />
          <Typography variant="h4" align="center">
            Your card is Empty
          </Typography>
          <Button
            onClick={viewProduct}
            variant="standard"
            sx={{ width: "20%", ml: "40%" }}
          >
            View Product
          </Button>
        </Box>
      ) : (
        <Box>
          <Button onClick={addMore} variant="outlined">
            Add moreProduct
          </Button>
          <Box>
            <Grid
              container
              spacing={2}
              sx={{ gap: 3, marginTop: 2, justifyContent: "center" }}
            >
              {items.map((item, index) => {
                return (
                  <>
                    <Carted
                      id={item.id}
                      brand={item.brand}
                      img={item.imageurl}
                      price={item.price}
                      discount={item.discount}
                      rating={item.rating}
                      quantity={item.quantity}
                      index={index}
                    />
                  </>
                );
              })}
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Button onClick={cleardata} sx={{ color: "#e44c4c" }}>
              <DeleteIcon />
              ClearDATA
            </Button>
            <TOTAL />
          </Box>
          <Button onClick={payment} variant="outlined">
            Payment
          </Button>
        </Box>
      )}
      <Footer />
    </Box>
  );
};
