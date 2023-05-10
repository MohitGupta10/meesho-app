import { Navbar } from "../Navbar/nav";

import { Cards } from "../card/card";
import { Footer } from "../footer/footer";
// import { Profile } from "../Profile/profile"
export const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Profile/> */}
      <Cards/>
      <Footer />
    </>
  );
};
