import "./card.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import { useTheme } from "@mui/material/styles";
import { Image } from "mui-image";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, setLoading } from "../../features/cartslice";
import { addItem } from "../../features/cartslice";
// import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Box, Card, CardMedia, Container, Grid } from "@mui/material";
export const Cards = () => {
  const theme = useTheme();
  const filterData = useSelector((state) => state.cart.productsSlice.serach);
  // console.log(filterData);
  const dispatch = useDispatch();
  const [sorting, setSorting] = useState("1");
  useEffect(() => {
    dispatch(setLoading(true));
    axios.get("http://localhost:5555/productlist").then((res) => {
      // setData(res.data.products);
      dispatch(addProducts(res.data));
      dispatch(setLoading(false));
      // console.log(res.data);

      // console.log(data[0]);
    });
  }, [dispatch]);
  const handelChange = (e) => {
    // console.log(e.target.value);
    setSorting(e.target.value);
  };
  const addtocart = (data) => {
    dispatch(addItem(data));

    toast("item to cart susscessfully", {
      position: "bottom-left",
      theme: "light",
      progress: undefined,
    });
  };
  const DataSorted = [...filterData].sort((a, b) => {
    // console.log(sorting);
    if (sorting === "1") {
      return b.price - a.price;
    } else if (sorting === "2") {
      return a.price - b.price;
    } else if (sorting === "3") {
      return a.id - b.id;
    } else if (sorting === "4") {
      return a.rating - b.rating;
    } else {
      return b.discount - a.discount;
    }
  });
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
  }));
  return (
    <>
      <Container component="main">
        <Box
          // component="main"
          sx={{ mt: { xs: 6, sm: 0 }, alignItems: "center" }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: "#F9F9F9",
              p: 2,
              // gap:.5
            }}
          >
            <Grid
              item
              xs={12}
              sm={5}
              md={5}
              lg={4}
              xl={4}
              sx={{ pt: 5, pr: 2 }}
            >
              <Typography variant="h3" sx={{ pt: 5 }}>
                Lowest Prices Best Quality Shopping
              </Typography>
              <Grid
                container
                justifyContent="space-between"
                backgroundColor="#ffffff"
                sx={{ mt: 3 }}
              >
                <Grid item xs={4}>
                  <img
                    src="https://images.meesho.com/images/pow/freeDelivery.svg"
                    style={{ marginRight: 5 }}
                    alt=""
                  />
                  <span> Free Delivery</span>
                </Grid>
                <Grid item xs={4}>
                  <img
                    src="https://images.meesho.com/images/pow/cod.svg"
                    style={{ marginRight: 3 }}
                    alt=""
                  />
                  <Typography variant="p">Cash On Delivery</Typography>
                </Grid>
                <Grid item xs={4}>
                  <img
                    src="https://images.meesho.com/images/pow/easyReturns.svg"
                    style={{ marginRight: 3 }}
                    alt=""
                  />
                  <span>Easy to Return</span>
                </Grid>
              </Grid>
              <Button variant="standard" sx={{ mt: 5 }}>
                Download the Meesho App
              </Button>
            </Grid>
            <Grid xs={12} sm={7} lg={8} sx={{ pt: 5 }}>
              <Image
                src="https://images.meesho.com/images/marketing/1678691617864.webp"
                // height="95%"
              />
            </Grid>
          </Grid>
        </Box>
        <Typography variant="h3" align="center" mt={5}>
          Top Categories to choose from
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
            // flexDirection: theme.flexDirection,
            height: 500,
            mt: 5,
            backgroundImage: `url("https://images.meesho.com/images/marketing/1678691670429.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            cursor: "pointer",
            overflow: "auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container
            sx={{
              // border: 1,
              height: { md: 400, lg: 350, xl: 350 },
              width: { xs: "100%", sm: "62%", md: "39%", lg: "35%", xl: "35%" },
              mt: 5,
            }}
          >
            <Image
              src="https://images.meesho.com/images/marketing/1678691686252.webp"
              alt=""
            />
          </Container>
          <Container
            sx={{
              display: "flex",
              flexDirection: theme.flexDirection,
              // border: "1px solid blue",
              width: {
                md: "60%",
                lg: "70%",
                xl: "70%",
              },
              height: { md: 300, lg: 350, xl: 350 },
              mt: { md: 22, lg: 22, xl: 22 },
            }}
          >
            <Image
              src="https://images.meesho.com/images/marketing/1678691699680_300.webp"
              alt=""
            />
            <Image
              src="https://images.meesho.com/images/marketing/1678691712594_300.webp"
              alt=""
            />
          </Container>
        </Box>
        <Grid
          container
          // className="card3"

          sx={{
            backgroundImage: {
              xs: `url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000")`,
              sm: `url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000")`,
              md: `url("https://images.meesho.com/images/marketing/1678691743015.jpg")`,
            },
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: { xs: "160em", sm: "100em", md: "550px" },
            mt: 5,
            justifyContent: "center",
            alignItems: "center",
            // border: 1,
          }}
        >
          <Grid
            item
            justifyContent="center"
            alignItem="center"
            xs={6}
            md={2}
            sx={{ order: { xs: 2, sm: 2, md: 1 } }}
          >
            <Button variant="standard">View All</Button>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={9}
            container
            sx={{
              gap: 1,
              // marginTop: 2,
              justifyContent: { xs: "center", md: "end" },
              // ml: { xs: 0, sm: 0, md: 10 },
              // border: 1,
              order: { xs: 1, sm: 1, md: 2 },
            }}
          >
            <Grid item xs={10} md={3} sm={5} lg={4}>
              <Image src="https://images.meesho.com/images/marketing/1678691846068.webp" />
              <Button variant="contained">Home Decor</Button>
            </Grid>
            <Grid
              item
              xs={10}
              md={3}
              sm={5}
              lg={4}
              sx={{
                mt: { xs: 7, sm: 0, md: 0, lg: 0, xl: 0 },
              }}
            >
              <Image src="https://images.meesho.com/images/marketing/1678691832099.webp" />
              <Button variant="contained">Kitchen Appliances</Button>
            </Grid>
            <Grid
              item
              xs={10}
              md={3}
              sm={6}
              lg={4}
              sx={{
                mt: { xs: 7, sm: 7, md: 0, lg: 0, xl: 0 },
              }}
            >
              <Image src="https://images.meesho.com/images/marketing/1678691796046.webp" />
              <Button variant="contained">Health Care</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            backgroundImage: {
              xs: `url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000")`,
              sm: `url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000")`,
              md: `url("https://images.meesho.com/images/marketing/1678691892265.jpg")`,
            },
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            mt: 5,
            height: { xs: "160em", sm: "100em", md: "550px" },
            justifyContent: "center",
            alignItems: "center",
            // overflow: "auto",
            // border: 1,
          }}
        >
          <Grid
            item
            xs={6}
            md={2}
            sx={{
              justifyContent: "center",
              order: { xs: 2, sm: 2, md: 1 },
            }}
          >
            <Button variant="standard">View All</Button>
          </Grid>
          <Grid
            xs={12}
            md={9}
            container
            sx={{
              gap: 1,
              justifyContent: { xs: "center", md: "end" },
              // border: 1,
              marginTop: 2,
              order: { xs: 1, sm: 1, md: 2 },
            }}
          >
            <Grid item xs={10} md={3} sm={5} lg={4}>
              <Image src="https://images.meesho.com/images/marketing/1678691960553.webp" />
              <Button variant="contained">Accessories</Button>
            </Grid>
            <Grid
              item
              xs={10}
              md={3}
              sm={5}
              lg={4}
              sx={{
                mt: { xs: 7, sm: 0, md: 0, lg: 0, xl: 0 },
              }}
            >
              <Image src="https://images.meesho.com/images/marketing/1678691936892.webp" />
              <Button variant="contained">Footwear</Button>
            </Grid>
            <Grid
              item
              xs={10}
              md={3}
              sm={5}
              lg={4}
              sx={{
                mt: { xs: 7, sm: 7, md: 0, lg: 0, xl: 0 },
              }}
            >
              <Image
                src="https://images.meesho.com/images/marketing/1678691925419.webp"
                alt=""
              />
              <Button variant="contained">Electronic</Button>
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{
            width: "100%",
            // height: { xs: 300, sm: 550, md: 467 },
            backgroundImage: `url("https://images.meesho.com/images/pow/downloadBannerDesktop.webp")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

            mt: 5,
            height: { xs: "300px", sm: "560px" },
            justifyContent: "center",
            alignItems: "center",
            // border: 1,
          }}
        >
          <Container sx={{ pt: { xs: 1, sm: 15, md: 15, lg: 15, xl: 15 } }}>
            <Typography
              variant="h4"
              color="rgb(85, 133, 248)"
              align="end"
              fontSize={{ xs: 15, sm: 30, md: 35, lg: 35, xl: 35 }}
              backgroundColor="transparent"
              padding="20px 0px 0px 15px"
              width={{ xs: "90%", sm: "100%", md: "70%" }}
            >
              Become a Reseller and
            </Typography>
            <Typography
              variant="h4"
              color="rgb(244, 51,151)"
              align="end"
              fontSize={{ xs: 15, sm: 25, md: 45, lg: 45, xl: 45 }}
              fontWeight={"bold"}
              // mt={{ xs: 2, sm: 10 }}
              // ml={{ xs: 15, sm: 15 }}
              width={"100%"}
              backgroundColor={"transparent"}
              // border={1}
            >
              Start your Online Bussiness <br></br>with Zero Investment
            </Typography>
          </Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              flexDirection: { xs: "column", sm: "row" },
              mt: { xs: 1, sm: 2, md: 5 },
              alignItems: "end",
              // width: { xs: "80%", sm: "85%", md: "90%", lg: "70%", xl: "70%" },
              // border: 1,
            }}
          >
            <Grid
              container
              justifyContent="center"
              sx={{
                gap: 2,
                width: { xs: "80%", sm: "60%" },
                mt: { xs: 8, sm: 0 },
              }}
            >
              <Grid item xs={8} md={5}>
                <Image src="https://images.meesho.com/images/pow/playstoreIcon_500.webp" />
              </Grid>
              <Grid item xs={8} md={5}>
                <Image src="https://images.meesho.com/images/pow/appstoreIcon_500.webp" />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Grid
          container
          sx={{
            display: { xs: "none", sm: "block" },
            // height: { xs: 300, sm: 200, md: 300 },
            backgroundImage: `url("https://images.meesho.com/images/pow/supplyBannerDesktop.webp")`,
            backgroundSize: { xs: "cover", sm: "cover", md: "cover" },
            backgroundRepeat: "no-repeat",
            // m: "auto",
            mt: 5,
            height: {
              sm: "200px",
              md: "300px",
            },
            justifyContent: "center",
            alignItems: "center",
            // border: "1px solid red",
          }}
        >
          <Container
            sx={{
              padding: "45px 0px 0px 20px",
              // border: "1px solid red",
            }}
          >
            <Typography
              variant="h4"
              color="white"
              fontSize={{ xs: 15, sm: 18, md: 35, lg: 35, xl: 35 }}
              fontWeight={"bold"}
            >
              Register as a Meesho Supplier
            </Typography>
            <Typography
              variantMapping="p"
              color="white"
              mt={1}
              fontSize={{ xs: 12, sm: 15, md: 20, lg: 25, xl: 30 }}
            >
              Sell your products to crores of customers at 0% commision
            </Typography>

            <Grid
              container
              sx={{
                color: "white",
                mt: { xs: 3, sm: 5, md: 5, lg: 10, xl: 10 },
              }}
            >
              <Grid item xs={4}>
                Grow your bussiness 10x
              </Grid>
              <Grid item xs={4}>
                Enjoy 100% Profit|
              </Grid>
              <Grid item xs={4}>
                Sell all over India
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Typography
          variant="h2"
          fontSize={theme.typography.heading}
          alignContent="center"
        >
          Product For you
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: theme.flexDirection,
            // border: 1,
            // justifyContent: "center",
            // alignItems: "center",
            mt: 5,
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "20%",
                lg: "20%",
                xl: "20%",
              },
              // border: 1,
              display: "flex",
              flexDirection: theme.flexDirection1,
            }}
          >
            <Box
              sx={{
                width: "90%",
                ml: 2,
                mt: 1,
                mb: 1,
              }}
            >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={handelChange}
              >
                <MenuItem value="1">High to Low</MenuItem>
                <MenuItem value="2">Low to High</MenuItem>
                <MenuItem value="3">ID</MenuItem>
                <MenuItem value="4">Rating</MenuItem>
                <MenuItem value="5">Discount</MenuItem>
              </Select>
            </Box>
            <Box
              sx={{
                width: "100%",
                fontSize: 15,
              }}
            >
              <Typography
                variant="h3"
                fontSize={20}
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              >
                Filter
              </Typography>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  fontSize={20}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  Categories:
                  <ArrowDropDownIcon />
                </Typography>

                <Typography
                  variant="h2"
                  fontSize={20}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  Gender: <ArrowDropDownIcon />
                </Typography>
                <Typography
                  variant="h2"
                  fontSize={20}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  Fabric: <ArrowDropDownIcon />
                </Typography>
                <Typography
                  variant="h2"
                  fontSize={20}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  Oxford:
                  <ArrowDropDownIcon />
                </Typography>
              </Box>
            </Box>
          </Box>
          <Grid justifyContent="center">
            <Grid
              container
              spacing={2}
              sx={{ gap: 1, justifyContent: "center" }}
            >
              {DataSorted.map((item) => {
                return (
                  <>
                    <Box
                      sx={{
                        // border: 1,
                        p: 2,
                        mt: 2,
                        alignItems: "center",
                        borderRadius: 3,
                        textAlign: "center",
                      }}
                    >
                      <Card style={{ width: "250px" }}>
                        <Grid
                          item
                          key={item.id}
                          xs={12}
                          sm={12}
                          md={12}
                          sx={{ height: "500px", cursor: "pointer" }}
                        >
                          <CardMedia
                            component="img"
                            height="250px"
                            image={item.imageurl}
                            cursor="pointer"
                          ></CardMedia>
                          <Typography
                            variant="h6"
                            sx={{
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                              width: "100%",
                              pl: 2,
                            }}
                          >
                            {item.description}
                          </Typography>
                          <Typography
                            sx={{
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                              width: "100%",
                              pl: 2,
                            }}

                            // border="1px solid black"
                          >
                            Brand:{item.brand}
                          </Typography>
                          <Typography>Rs.{item.price}</Typography>
                          <Typography>Discount:{item.discount}%</Typography>
                          <Typography>
                            <Rating name="no-value" value={item.rating} />
                          </Typography>
                          <Box textAlign="center" mb="5px">
                            <ColorButton
                              onClick={() => {
                                addtocart(item);
                              }}
                              variant="contained"
                            >
                              Addtocart
                            </ColorButton>
                          </Box>
                          <ToastContainer />
                        </Grid>
                      </Card>
                    </Box>
                  </>
                );
              })}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
