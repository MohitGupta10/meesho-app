import { Navbar } from "../Navbar/nav";
import { Cards } from "../card/card";
import { Footer } from "../footer/footer";
import { Container } from "@mui/material";
// import {Design} from "./design"
// import ButtonAppBar from "../Navbar/navar";
// import { Profile } from "../Profile/profile"
export const Home = () => {
  return (
    <>
      {/* <ButtonAppBar/> */}
      {/* <Design/> */}
      <Container >
        <Navbar />
        <Cards />
        <Footer />
      </Container>
    </>
  );
};
