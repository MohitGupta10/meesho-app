import { Box, Grid, Typography } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar } from "@mui/material";
import Input from "@mui/material/Input";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { setserachItem } from "../../features/cartslice";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
function creataData(Women, Sarees, Kurtis, Kurta, Suits, Other) {
  return { Women, Sarees, Kurtis, Kurta, Suits, Other };
}
const rows = [
  creataData(
    "View All",
    "All Sarees",
    "All Kurtis",
    "All Kurta Sets",
    "All Suits & Dress Material",
    "Blouses"
  ),
  creataData(
    "",
    "Silk Sarees",
    "Anarkali Kurtis",
    "",
    "Cotton Suits",
    "Dupattas"
  ),
  creataData(
    "",
    "Cotton Silk Sarees",
    "Rayon Kurtis",
    "",
    "Embroidered Suits",
    "Lehanga"
  ),
  creataData(
    "",
    "Cotton Sarees",
    "Cotton Kurtis",
    "",
    "Chanderi Suits",
    "Gown"
  ),
  creataData(
    "",
    "Georgette Sarees",
    "Embroidered Kurtis",
    "",
    "",
    "Ethnic Bottomwear"
  ),
  creataData("", "Chiffon Sarees", "", "", "", ""),
  creataData("", "Satin Sarees", "", "", "", ""),
  creataData("", "Embroidered Sarees", "", "", "", ""),
];
export const Navbar = () => {
  const theme = useTheme();
  const [serachiconhidden, setSearchiconhidden] = useState(false);
  const [search, setSerach] = useState("");
  const [searchicon, setSerachicon] = useState(false);
  const [icon, setIcon] = useState(false);
  const [list, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  let count = useSelector((state) => state.cart.cartSlice.value);
  let data = useSelector((state) => state.cart.productsSlice.data);
  const dispatch = useDispatch();
  const handleMouseOver = (event) => {
    event === "over" ? setShow(true) : setShow(false);
    event === "profile-over" ? setProfile(true) : setProfile(false);
  };
  const handelchange = (e) => {
    setSerach(e.target.value);
  };
  const handelSerach = () => {
    setSerachicon(!searchicon);
    setSearchiconhidden(!serachiconhidden);
  };
  const handelIcon = () => {
    setIcon(!icon);
  };
  const filterData = data.filter((item) => {
    return (
      item.brand.toLowerCase().includes(search.toLowerCase()) ||
      item.price.toString().includes(search) ||
      item.discount.toString().includes(search) ||
      item.id.toString().includes(search)
    );
  });
  useEffect(() => {
    dispatch(setserachItem(filterData));
  }, [dispatch, filterData]);
  return (
    <>
      <AppBar component="nav">
        <Grid container justifyContent="space-evenly" sx={{ mt: 1 }}>
          <Grid item xs={4} sm={2}>
            <img
              src="https://static.meeshosupply.com/supplier-new/meesho_static_images/meesho-logo.webp"
              alt=""
            />
          </Grid>
          <Grid item xs={5} sm={4}>
            <SearchIcon
              onClick={handelSerach}
              value="serach"
              sx={{ mt: 1 }}
              style={{
                display: searchicon ? "none" : "block",
                cursor: "pointer",
              }}
            />
            {searchicon && (
              <Box
                sx={{
                  display: "flex",
                  border: 1,
                  marginTop: { sm: 0.5 },
                  // ml: 2,
                }}
              >
                <SearchIcon
                  sx={{
                    fontSize: 20,
                    alignItem: "center",
                    mt: 1,
                    mr: 1,
                    cursor: "pointer",
                  }}
                  onClick={handelSerach}
                  value="serach"
                />
                <Input
                  id="input-with-icon-adornment"
                  onChange={handelchange}
                  placeholder="Serach any item "
                  fullWidth
                />
              </Box>
            )}
          </Grid>
          <Grid
            item
            sm={1.5}
            md={1}
            display={{ xs: "none", sm: "block" }}
            sx={theme.Navbar}
          >
            <PhoneAndroidIcon sx={{ mt: 1 }} /> Download App
          </Grid>
          <Grid item sm={1.5} md={1} display={{ xs: "none", sm: "block" }}>
            <Link to="/supplier" style={{ color: "black" }}>
              Become a Supplier
            </Link>
          </Grid>
          <Grid
            item
            sm={1}
            display={{ xs: "none", sm: "block" }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                color: "rgb(244, 51, 151)",
                borderBottom: "3px solid rgb(244, 51, 151)",
              },
            }}
            onMouseOver={() => handleMouseOver("profile-over")}
            onMouseOut={() => handleMouseOver("profile-out")}
          >
            <PermIdentityIcon />
            <Typography>
              Profile
              {profile && (
                <Box
                  width="100%"
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Box
                    sx={{
                      position: "fixed",
                      top: "25%",
                      right: "20px",
                      transform: "translateY(-50%)",
                      width: "300px",
                      height: "150px",
                      backgroundColor: "#f1f1f1",
                      padding: "10px",
                      border: "1px solid #ccc",
                    }}
                  >
                    <Typography variant="caption" color="black">Hello user welcome to shopping</Typography>
                    <Typography>
                      <Link to="/profile">
                        <Button variant="standard" sx={{ width: "50%",fontSize:"12px"}}>
                          Signup
                        </Button>
                      </Link>
                      <br></br>
                      <WorkOutlineOutlinedIcon />
                      <Link to="/cart">
                        <span>My order</span>
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              )}
            </Typography>
          </Grid>
          <Grid item sm={0.5} display={{ xs: "none", sm: "block" }}>
            <Link to="/cart" style={{ color: "black" }}>
              <ProductionQuantityLimitsIcon />
              <Badge badgeContent={count} color="error">
                Cart
              </Badge>
            </Link>
          </Grid>
          <Grid item xs={2} display={{ sm: "none" }} onClick={handelIcon}>
            <IconButton>
              <MenuIcon />
            </IconButton>
            {icon && (
              <Box sx={{ backgroundColor: "#FFFFFF" }}>
                <Box
                  sx={{
                    position: "fixed",
                    top: "50%",
                    right: "20px",
                    transform: "translateY(-50%)",
                    width: "100px",
                    height: "150px",
                    backgroundColor: "#f1f1f1",
                    padding: "10px",
                    border: "1px solid #ccc",
                    cursor: "pointer",
                  }}
                >
                  <Typography>
                    <Link to="/" style={{ color: "black" }}>
                      Download
                    </Link>
                  </Typography>
                  <Typography>
                    <Link to="/supplier" style={{ color: "black" }}>
                      Become a supply
                    </Link>
                  </Typography>
                  <Typography>
                    <Link to="/profile" style={{ color: "black" }}>
                      Profile
                    </Link>
                  </Typography>
                  <Typography>
                    <Badge badgeContent={count} sx={{ color: "error" }}>
                      <Link to="/cart" style={{ color: "black" }}>
                        Cart
                      </Link>
                    </Badge>
                  </Typography>
                </Box>
              </Box>
            )}
          </Grid>
        </Grid>
        <Grid container sx={{ gap: 1, mt: 2 }}>
          <Grid item xs={1.5} sm={1.5} sx={{ ml: 3 }}>
            <Typography
              fontSize={theme.fontSizevalue}
              onMouseOver={() => handleMouseOver("over")}
              onMouseOut={() => handleMouseOver("out")}
              sx={{
                "&:hover": theme.Hover,
              }}
            >
              Women Ethnic
              {list && (
                <Box
                  sx={{
                    // align: "right",
                    boxSizing: "border-box",
                    // textAlign: "right",
                    // mr: "100px",
                    // ml: "75%",
                    width: "95%",
                    backgroundColor: "white",
                    position: "absolute",
                    top: 106,
                    zIndex: 2,
                    // height: "130px",
                    // paddingTop:"20px",
                    paddingLeft: "15px",
                    // border: 1,
                    color: "black",
                    "&:focus": {
                      backgroundColor: "blue",
                      color: "white",
                    },

                    // padding:4,
                    // height: "100px",
                    // border: 1,
                  }}
                >
                  <TableContainer component={Paper}>
                    <Table
                      sx={{ minWidth: 650 }}
                      size="small"
                      aria-label="a dense table"
                    >
                      <TableHead variant="head">
                        <TableRow>
                          <TableCell sx={theme.colorChanges}>
                            All Women Ethnic
                          </TableCell>
                          <TableCell sx={theme.colorChanges}>Saree</TableCell>
                          <TableCell sx={theme.colorChanges}>Kurtis</TableCell>
                          <TableCell sx={theme.colorChanges}>
                            Kurta Sets
                          </TableCell>
                          <TableCell sx={theme.colorChanges}>
                            Suits and Dress Material
                          </TableCell>
                          <TableCell sx={theme.colorChanges}>
                            Other Ethnic
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.name} sx={theme.colorChanges}>
                            <TableCell>{row.Women}</TableCell>
                            <TableCell>{row.Sarees}</TableCell>
                            <TableCell>{row.Kurtis}</TableCell>
                            <TableCell>{row.Kurta}</TableCell>
                            <TableCell>{row.Suits}</TableCell>
                            <TableCell>{row.Other}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )}
            </Typography>
          </Grid>
          <Grid item xs={1.5} sm={2}>
            <Typography
              fontSize={theme.fontSizevalue}
              sx={{
                "&:hover": theme.Hover,
              }}
            >
              Women Western
            </Typography>
          </Grid>
          <Grid item xs={0.5} display={theme.Display}>
            <Typography
              fontSize={theme.fontSizevalue}
              sx={{
                "&:hover": theme.Hover,
              }}
            >
              Kids
            </Typography>
          </Grid>
          <Grid item xs={0.5} display={theme.Display}>
            <Typography
              fontSize={theme.fontSizevalue}
              sx={{
                "&:hover": theme.Hover,
              }}
            >
              Men
            </Typography>
          </Grid>
          <Grid item xs={1.5} sm={1.5} display={theme.Display}>
            <Typography
              fontSize={theme.fontSizevalue}
              sx={{
                "&:hover": theme.Hover,
              }}
            >
              Home & Kitchen
            </Typography>
          </Grid>
          <Grid item xs={2.5} sm={1.5}>
            <Typography
              fontSize={theme.fontSizevalue}
              sx={{
                "&:hover": theme.Hover,
              }}
            >
              Beauty & Health
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1.5}>
            <Typography
              fontSize={theme.fontSizevalue}
              sx={{
                "&:hover": theme.Hover,
              }}
            >
              Bags & Footwear
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1}>
            <Typography
              fontSize={theme.fontSizevalue}
              sx={{
                "&:hover": theme.Hover,
              }}
            >
              Electronic
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};
