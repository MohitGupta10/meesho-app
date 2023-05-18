// import "./footer.css";
import { makeStyles } from "@mui/styles";
import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Image } from "mui-image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
// import { Direction } from "react-toastify/dist/utils";
// const useStyles = makeStyles((theme) => ({
//   footer: {
//     padding: theme.spacing(2),
//     marginTop: "auto",
//   },
// }));
export const Footer = () => {
  // const classes = useStyles();
  return (
    <>
      <Box
        component="footer"
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "200px",
            sx: "200px 200px 200px",
            md: "200px 100px 200px 150px 200px",
          },
          width: {
            xs: "60%",
            sm: "90%",
            md: "90%",
            lg: "90%",
            xl: "90%",
          },
          height: { xs: 1400, sm: 900, md: 270, lg: 650 },
          m: { xs: "auto", sm: "auto", md: "auto" },
          // ml:{xs:5,sm:8,md:10,lg:10,xl:10},
          bgcolor: "rgb(249, 249, 249)",
          mt: { xs: 0, sm: 0, md: 10 },

          // border: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            width: "100%",
            // border: 1,
            height: { xs: "50%", sm: "70%", md: "90%" },
            mt: { xs: 2, sm: 5, md: 5 },
          }}
        >
          <Typography variant="h2" fontSize="25px" fontWeight={"bold"}>
            Shop Non-Stop On Meesho
          </Typography>
          <Typography variantMapping="p" mt={2}>
            Trusted by more than 1 Core Indian Cash On Delivery
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            width: "90%",
            height: { xs: "50%", sm: "70%", md: "90%" },
            mt: { xs: "0%" },
            // border:1
          }}
        >
          <Typography variant="h4" fontSize="20px">
            Career
          </Typography>
          <Typography variant="h4" fontSize="20px">
            Become a Supplie
          </Typography>
          <Typography variant="h4" fontSize="20px">
            Hall of Fame
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h4" fontSize="20px">
            Legal and Policies
          </Typography>
          <Typography variant="h4" fontSize="20px">
            Meesho Tech Blog
          </Typography>
          <Typography variant="h4" fontSize="20px">
            Notices and Return
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            mt: 5,
            width: "90%",
          }}
        >
          <Typography variant="h4" fontSize="15px">
            Reach out of us
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              // border: 1,
              mt: 2,
              mr: { sx: 10 },
              justifyContent: "space-between",
            }}
          >
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <LinkedInIcon />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-evenly",
            width: "90%",
          }}
        >
          <Typography variant="h3" fontSize="18px">
            Cotact Us
          </Typography>
          <Typography paragraph fontSize={{ xs: 8, sm: 10, md: 15 }}>
            Fashnear Technologies Private Limited, CIN: U74900KA2015 06-105-B,
            06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road,
            Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India E-mail
            address: query@meesho.com © 2015-2022 Meesho.com
          </Typography>
        </Box>
      </Box>
    </>
  );
};
