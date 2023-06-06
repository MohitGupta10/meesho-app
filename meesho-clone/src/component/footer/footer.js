import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Image } from "mui-image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
export const Footer = () => {
  return (
    <>
      <Box>
        <Grid container sx={{ backgroundColor: "rgb(249, 249, 249)", p: 5 }}>
          <Grid
            item
            xs={12}
            sm={8}
            lg={3}
            xl={3}
            md={4}
            sx={{
              mt: { xs: 1, sm: 5, md: 5 },
              // border: 1,
            }}
          >
            <Typography
              variant="h2"
              fontSize="12px"
              fontWeight={"700"}
              fontFamily="Mier bold"
              color="#333333"
              lineHeight={"40px"}
            >
              Shop Non-Stop On Meesho
            </Typography>
            <Typography variantMapping="p" fontSize="8px">
              Trusted by more than 1 Core Indian Cash On Delivery
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "start", mt: 2 }}>
              <Image
                width={"20%"}
                src="https://images.meesho.com/images/pow/playstoreIcon_500.webp"
              />
              <Image
                width={"20%"}
                style={{ marginLeft: "20px", padding: 2.8 }}
                src="https://images.meesho.com/images/pow/appstoreIcon_500.webp"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            lg={2}
            xl={2}
            md={1}
            sx={{
              mt: { xs: 1, sm: 5, md: 7 },
              // border: 1,
            }}
          >
            <Typography variant="h4" fontSize="10px">
              Career
            </Typography>
            <Typography variant="h4" fontSize="10px" mt={2}>
              Become a Supplie
            </Typography>
            <Typography variant="h4" fontSize="10px" mt={2}>
              Hall of Fame
            </Typography>
          </Grid>
          <Grid
            xs={6}
            sm={4}
            lg={2}
            xl={2}
            md={1}
            sx={{
              mt: { xs: 1, sm: 5, md: 7 },
            }}
          >
            <Typography variant="h4" fontSize="10px">
              Legal and Policies
            </Typography>
            <Typography variant="h4" fontSize="10px" mt={2}>
              Meesho Tech Blog
            </Typography>
            <Typography variant="h4" fontSize="10px" mt={2}>
              Notices and Return
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sm={5}
            lg={2}
            xl={2}
            md={3}
            sx={{
              mt: { xs: 1, sm: 5, md: 7 },
            }}
          >
            <Typography
              variant="h4"
              fontSize="10px"
              color="#333333"
              fontWeight={"700"}
              textAlign={{
                xs: "start",
                sm: "center",
                md: "center",
                lg: "center",
                xl: "center",
              }}
            >
              Reach out of us
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                // border: 1,
                mt: 2,
                justifyContent: { xs: "start", sm: "start", md: "center" },
              }}
            >
              <FacebookIcon sx={{ fontSize: 15, ml: 2 }} />
              <InstagramIcon sx={{ fontSize: 15, ml: 2 }} />
              <YouTubeIcon sx={{ fontSize: 15, ml: 2 }} />
              <LinkedInIcon sx={{ fontSize: 15, ml: 2 }} />
              <TwitterIcon sx={{ fontSize: 15, ml: 2 }} />
            </Box>
          </Grid>
          <Grid
            xs={12}
            sm={3}
            lg={2}
            xl={2}
            md={2}
            sx={{
              mt: { xs: 2, sm: 5, md: 7 },
            }}
          >
            <Typography variant="h3" fontSize="10px">
              Cotact Us
            </Typography>
            <Typography paragraph fontSize={{ xs: 7, sm: 8, md: 10 }} mt={2}>
              Fashnear Technologies Private Limited, CIN: U74900KA2015 06-105-B,
              06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road,
              Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
              E-mail address: query@meesho.com © 2015-2022 Meesho.com
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
