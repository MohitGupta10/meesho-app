import "./card.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';
// import Divider from "@mui/material/Divider";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import { Image } from "mui-image";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, setLoading } from "../../features/cartslice";
import { addItem } from "../../features/cartslice";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Box, Container, Grid } from "@mui/material";
export const Cards = () => {
  const theme = useTheme();
  // let items = useSelector((state) => state.cart.productsSlice.data);
  const filterData = useSelector((state) => state.cart.productsSlice.serach);
  console.log(filterData);
  // const {search}=useSelector((state)=>)
  // console.log(search)
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
    setSorting(e.target.value);
  };
  const addtocart = (data) => {
    dispatch(addItem(data));

    toast("item to cart susscessfully", {
      position: "bottom-left",
    });
  };
  const DataSorted = [...filterData].sort((a, b) => {
    if (sorting === "1") {
      return b.price - a.price;
    } else if (sorting === "2") {
      return a.price - b.price;
    } else if (sorting === "3") {
      return b.rating - a.rating;
    } else if (sorting === "4") {
      return b.discount - a.discount;
    } else {
      return a.id - b.id;
    }
  });
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
  }));
  return (
    <>
      <Box
        // className="card1"
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          },
          height: { xs: 600, sm: 300, md: 350, lg: 250, xl: 250 },
          width: { xs: "95%", sm: "90%", md: "90%", lg: "90%", xl: "90%" },
          m: "auto",
          justifyContent: "space-evenly",
          bgcolor: "rgb(249,249,249)",
          // border: 1,
          mt: { xs: "22%", sm: "19%", md: "10%", lg: 3, xl: 3 },
        }}
      >
        <Box
          sx={{
            width: { xs: "95%", sm: "35%", md: "40%", lg: "45%", xl: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            fontFamily: theme.typography.fontFamily[2],
            // border: 1,
          }}
        >
          <Typography
            variant="h2"
            fontSize={{
              xs: 35,
              sm: 25,
              md: theme.typography.heading.fontSize,
              lg: theme.typography.heading.fontSize,
              xl: theme.typography.heading.fontSize,
            }}
            fontWeight={"bold"}
          >
            Lowest Prices Best Quality Shopping
          </Typography>
          <Box
            sx={{
              display: "flex",
              fontSize: {
                xs: 18,
                sm: 13,
                md: theme.typography.para.fontSize,
              },
              justifyContent: "space-between",
              // border:1,
              width: "90%",
              mt: 2,
            }}
          >
            <p>Free Delivery</p>
            <p>Cash On Delivery</p>
            <p>Easy to Return </p>
          </Box>
          <Button
            variant="contained"
            style={{
              borderRadius: 10,
              backgroundColor: "rgb(244, 51,151)",
              color: theme.palette.primary.main,
            }}
          >
            Download the Meesho App
          </Button>
        </Box>
        <Container>
          <Image
            src="https://images.meesho.com/images/marketing/1678691617864.webp"
            width={"100%"}
            // height="95%"
          />
        </Container>
      </Box>
      <Typography
        variant="h2"
        align="center"
        width="90%"
        fontSize={{
          xs: 14,
          sm: 20,
          md: theme.typography.heading.fontSize,
          lg: theme.typography.heading.fontSize,
          xl: theme.typography.heading.fontSize,
        }}
        mt={5}
      >
        Top Categories to choose from
      </Typography>
      <Box
        // className="card2"
        sx={{
          width: { xs: "95%", sm: "90%", md: "90%", lg: "90%", xl: "90%" },
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
          height: { xs: 550, sm: 550, md: 400, lg: 400, xl: 400 },
          m: "auto",
          mt: 10,
          backgroundImage: `url("https://images.meesho.com/images/marketing/1678691670429.jpg")`,
        }}
      >
        <Box
          mt={0.5}
          sx={{
            // border: 1,
            height: { xs: 200, sm: 250, md: 450, lg: 200, xl: 200 },
            ml: { xs: 1, sm: 5, md: 3, lg: 3, xl: 2 },
            width: { xs: "95%", sm: "70%", md: "33%", lg: "33%", xl: "33%" },
          }}
        >
          <img
            width={"100%"}
            height="90%"
            src="https://images.meesho.com/images/marketing/1678691686252.webp"
            alt=""
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "row",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            },
            // border:1,
            justifyContent: "space-evenly",
            width: { xs: "95%", sm: "90%", md: "60%", lg: "60%", xl: "60%" },
            height: { xs: "50%", sm: 200, md: 250, lg: 250, xl: 250 },
            ml: { xs: 1, sm: 5, md: 2, lg: 2, xl: 2 },
            mt: { xs: 2, sm: 2, md: 20, lg: 20, xl: 20 },
          }}
        >
          <img
            width={"45%"}
            height={"90%"}
            src="https://images.meesho.com/images/marketing/1678691699680.webp"
            alt=""
          />
          <img
            width={"45%"}
            height={"90%"}
            className="card2-image2"
            src="https://images.meesho.com/images/marketing/1678691712594.webp"
            alt=""
          />
        </Box>
      </Box>
      <Box
        // className="card3"
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
          width: "90%",
          backgroundImage: {
            xs: `url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000")`,
            sm: `url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000")`,
            md: `url("https://images.meesho.com/images/marketing/1678691743015.jpg")`,
          },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          m: "auto",
          height: { xs: 950, sm: 850, md: 400, lg: 400, xl: 400 },
          mt: { xs: 5, sm: 5, md: 15, lg: 5, xl: 5 },
          justifyContent: "space-evenly",
          // border: 1,
        }}
      >
        <Box
          sx={{
            width: { xs: "80%", sm: "80%", md: "20%", lg: "20%", xl: "20%" },
            mt: { xs: 5, sm: 5, md: 25, lg: 15, xl: 15 },
            // border: 1,
          }}
        >
          <Button
            variant="contained"
            style={{
              borderRadius: 10,
              backgroundColor: "rgb(244, 51,151)",
              height: "20px",
              width: "90%",
              padding: "20px",
            }}
          >
            View All
          </Button>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "150,150",
              sm: "150px 150px",
              md: "150px 150px 150px",
              lg: "150px 150px 150px",
              xl: "150px 150px 150px",
            },
            width: { xs: "90%", sm: "70%", md: "80%", lg: "80%", xl: "80%" },
            gap: 5,
            mt: { xs: 5, sm: 5, md: 10 },
            ml: { xs: 5, sm: 5, md: 25 },
            // border: 1,
          }}
        >
          <Box
            sx={{
              width: {
                xs: 130,
                sm: 140,
                md: 130,
                lg: 400,
                xl: 500,
              },
              // mt: {xs:5,sm:5,md:5},
              height: 220,
              // border: 1,
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-between",
              ml: { xs: 5, sm: 5, md: 0, lg: 0, xl: 0 },
            }}
          >
            <Image
              src="https://images.meesho.com/images/marketing/1678691846068.webp"
              height={"80%"}
              width={"90%"}
            />
            <Button
              style={{
                borderRadius: 10,
                backgroundColor: "black",
                height: "30px",
                padding: "10px",
                width: "95%",
                color: "white",
              }}
            >
              Home Decor
            </Button>
          </Box>
          <Box
            sx={{
              height: 220,
              width: {
                xs: 130,
                sm: 130,
                md: 130,
                lg: 130,
                xl: 130,
              },
              ml: { xs: 5, sm: 5, md: 0, lg: 0, xl: 0 },
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-around",
            }}
          >
            <Image
              width={"100%"}
              height={"80%"}
              src="https://images.meesho.com/images/marketing/1678691832099.webp"
            />
            <Button
              variant="contined"
              style={{
                borderRadius: 10,
                backgroundColor: "black",
                height: "40px",
                padding: "10px",
                width: "95%",
                color: "white",
              }}
            >
              Kitchen Appliances
            </Button>
          </Box>
          <Box
            sx={{
              height: 260,
              width: {
                xs: 130,
                sm: 130,
                md: 130,
                lg: 130,
                xl: 130,
              },
              ml: { xs: 5, sm: 5, md: 0, lg: 0, xl: 0 },
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-between",
            }}
          >
            <Image
              width={"90%"}
              height={"70%"}
              src="https://images.meesho.com/images/marketing/1678691796046.webp"
            />
            <Button
              variant="contined"
              style={{
                borderRadius: 10,
                backgroundColor: "black",
                height: "30px",
                padding: "10px",
                width: "90%",
                color: "white",
              }}
            >
              Health Care
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        // className="card4"
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
          backgroundImage: {
            xs: `url("https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=400")`,
            sm: `url("https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=400")`,
            md: `url("https://images.meesho.com/images/marketing/1678691892265.jpg")`,
          },
          width: "90%",
          height: { xs: 900, sm: 800, md: 400, lg: 400, xl: 400 },
          m: "auto",
          backgroundSize: "cover",
          mt: 5,
          // border: 1,
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", sm: "90%", md: "30%", lg: "30%", xl: "30%" },
            mt: { xs: 3, sm: 5, md: 15, lg: 15, xl: 15 },
            ml: { xs: 5, sm: 2, md: 0 },
          }}
        >
          <Button
            variant="contained"
            style={{
              borderRadius: 10,
              backgroundColor: "rgb(244, 51,151)",
              height: "20px",
              marginTop: "5%",
              width: "60%",
              padding: "20px",
            }}
          >
            View All
          </Button>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "100px 100px",
              sm: "150px 150px",
              md: "180px 180px 180px",
              lg: "150px 150px 150px",
              xl: "150px 150px 150px",
            },
            gap: 5,
            width: { xs: "90%", sm: "90%", md: "60%", lg: "60%", xl: "60%" },
            height: 220,
            mt: { xs: 12, sm: 5, md: 5 },
            ml: { xs: 0, sm: 4, md: 10 },
            // border:1
          }}
        >
          <Box
            sx={{
              width: {
                xs: 130,
                sm: 130,
                md: 130,
                lg: 400,
                xl: 500,
              },
              height: 220,
              // ml: { xs: 5, sm: 5, md: 0, lg: 0, xl: 0 },
            }}
          >
            <Image src="https://images.meesho.com/images/marketing/1678691960553.webp" />
            <Button
              variant="contained"
              style={{
                borderRadius: 10,
                backgroundColor: "black",
                height: "20px",
                padding: "10px",
                width: "130px",
                color: "white",
              }}
            >
              Accessories
            </Button>
          </Box>
          <Box
            sx={{
              width: {
                xs: 130,
                sm: 130,
                md: 130,
                lg: 400,
                xl: 500,
              },
              height: 220,
              // ml: { xs: 5, sm: 5, md: 0, lg: 0, xl: 0 },
            }}
          >
            <Image src="https://images.meesho.com/images/marketing/1678691936892.webp" />
            <Button
              variant="contained"
              style={{
                borderRadius: 10,
                backgroundColor: "black",
                height: "20px",
                padding: "10px",
                width: "130px",
                color: "white",
              }}
            >
              Footwear
            </Button>
          </Box>
          <Box
            sx={{
              width: {
                xs: 130,
                sm: 130,
                md: 130,
                lg: 400,
                xl: 500,
              },
              height: 220,
              // mt: { xs: 5, sm: 5, md: 0, lg: 0, xl: 0 },
              // ml: { xs: 5, sm: 5, md: 0, lg: 0, xl: 0 },
            }}
          >
            <Image
              src="https://images.meesho.com/images/marketing/1678691925419.webp"
              alt=""
            />
            <Button
              variant="contained"
              style={{
                borderRadius: 10,
                backgroundColor: "black",
                height: "20px",
                padding: "10px",
                width: "130px",
                color: "white",
              }}
            >
              Electronic
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        // class="card5"
        sx={{
          width: "90%",
          height: 250,
          backgroundImage: `url("https://images.meesho.com/images/pow/downloadBannerDesktop.webp")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          m: "auto",
          mt: 10,
        }}
      >
        <Typography
          variant="h4"
          color="rgb(85, 133, 248)"
          align="end"
          fontSize={{ xs: 30, sm: 30, md: 30, lg: 35, xl: 35 }}
        >
          Become a Reseller and
        </Typography>
        <Typography
          variant="h4"
          color="rgb(244, 51,151)"
          align="center"
          fontSize={{ xs: 25, sm: 25, md: 35, lg: 45, xl: 45 }}
          mt={{ xs: 2, sm: 10 }}
          ml={{ xs: 15, sm: 15 }}
          backgroundColor={{ xs: "black", sm: "black", md: "transparent" }}
        >
          Start your Online Bussiness <br></br>with Zero Investment
        </Typography>
      </Box>
      <Box
        sx={{
          width: "90%",
          height: 200,
          backgroundImage: `url("https://images.meesho.com/images/pow/supplyBannerDesktop.webp")`,
          m: "auto",
          mt: 10,
        }}
      >
        <Typography
          variant="h4"
          color="white"
          align="start"
          fontSize={{ xs: 15, sm: 18, md: 30, lg: 35, xl: 35 }}
        >
          Register as a Meesho Supplier
        </Typography>
        <Typography
          variantMapping="p"
          color="white"
          align="start"
          mt={1}
          fontSize={{ xs: 12, sm: 15, md: 20, lg: 25, xl: 30 }}
        >
          Sell your products to crores of customers at 0% commision
        </Typography>
        <Box
          sx={{
            display: "flex",
            mt: { xs: 3, sm: 5, md: 10, lg: 10, xl: 10 },
            color: "white",
            mx: { xs: 0, sm: 0, md: 5, lg: 15, xl: 15 },
            justifyContent: "space-between",
          }}
        >
          <Typography variantMapping="p">Grow your bussiness 10x</Typography>
          <Typography variantMapping="p">Enjoy 100% Profit|</Typography>
          <Typography variantMapping="p">Sell all over India</Typography>
        </Box>
      </Box>
      <Box sx={{ width: "80%" }}>
        <div className="Product-class">
          <h2>Product For you </h2>
        </div>
      </Box>
      <Box
        // className="card7-countainer"
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
          width: { xs: "90%", sm: "90%", md: "90%", lg: "90%", xl: "90%" },
          ml: "5%",
          // border: 1,
          mt: 5,
        }}
      >
        <Box
          // className="card7-options"
          sx={{
            width: { xs: "90%", sm: "90%", md: "20%", lg: "20%", xl: "20%" },
            borderRadius: 5,
            // border: 1,
            display: "flex",
            flexDirection: {
              xs: "row",
              sm: "row",
              md: "column",
              lg: "column",
              xl: "column",
            },
          }}
        >
          <Box sx={{ width: "90%", ml: 2, mt: 1, mb: 1 }}>
            <select onChange={handelChange}>
              <option value="1">High to Low</option>
              <option value="2">Low to High</option>
              <option value="3">Rating</option>
              <option value="4">Discount</option>
              <option value="5">ID</option>
            </select>
          </Box>
          <Box
            sx={{
              width: "90%",
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
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <Typography variant="h2" fontSize={20}>
                Categories: <ArrowDropDownIcon className="icon-tag-mui" />
              </Typography>

              <Typography variant="h2" fontSize={20}>
                Gender: <ArrowDropDownIcon className="icon-tag-mui" />
              </Typography>
              <Typography variant="h2" fontSize={20}>
                Fabric: <ArrowDropDownIcon className="icon-tag-mui" />
              </Typography>
              <Typography variant="h2" fontSize={20}>
                Oxford:
                <ArrowDropDownIcon className="icon-tag-mui" />
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          // className="card7part"
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "200px",
              sm: "200px 200px",
              md: "200px 200px 200px",
              lg: "170px 170px 170px",
              xl: "150px 150px 150px 150px",
            },
            width: "90%",
            ml: { xs: 5, sm: 0, md: 3, lg: 3, xl: 3 },
            height: "100%",
            cursor: "pointer",
            // justifyContent: "space-evenly",
            // border: 1,
            gap: 2,
          }}
        >
          {DataSorted.map((item) => {
            return (
              <>
                <Box
                  sx={{
                    // border: 1,
                    mt: 2,
                    alignItems: "center",
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: 320,
                    textAlign: "center",
                  }}
                >
                  <img
                    height="130px"
                    width="90%"
                    src={item.imageurl}
                    alt=""
                    className="img-card-display"
                  />

                  <Typography
                    gutterBottom
                    variant="caption"
                    component="div"
                    sx={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      width: "60%",
                    }}
                  >
                    TITLE:{item.description}
                  </Typography>
                  <Typography
                    component="div"
                    variant="caption"
                    sx={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      width: "60%",
                    }}

                    // border="1px solid black"
                  >
                    Brand:{item.brand}
                  </Typography>
                  <Typography gutterBottom variant="caption" component="div">
                    Price:{item.price}
                  </Typography>
                  <Typography gutterBottom variant="caption" component="div">
                    Discount:{item.discount}%
                  </Typography>
                  <Typography gutterBottom variant="caption" component="div">
                    <Rating name="no-value" value={item.rating} />
                  </Typography>
                  <Box textAlign="center">
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
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
};
