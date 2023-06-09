import "./App.css";
// import { Navbar } from "../src/component/Navbar/nav";
// import { Card } from "../src/component/card/card";
// import { Footer } from "../src/component/footer/footer";
import { theme } from "./themeProvider";
import { ThemeProvider } from "@mui/material/styles";
import { Grid, Container } from "@mui/material";
import { Supplier } from "../src/component/supplier/supplier";
import { Routes, Route } from "react-router-dom";
import { Home } from "../src/component/Home/home";
import { Profile } from "./component/Profile/profile";
import { Sell } from "./component/supplier/supplierList/sell/sell";
import { CartPage } from "./component/cart/cart";
import { Product } from "./component/card/product";
// import { Carted } from "./component/carted";
// import { Design } from "../src/component/Home/design";
import PrimarySearchAppBar from "../src/component/Home/navbar";
// import MyComponent from "./component/Home/imgar";
function App() {
  return (
    <div className="App">
      {/* <Design /> */}

      {/* <PrimarySearchAppBar>  */}
      <ThemeProvider theme={theme}>
        <Grid container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/supplier" element={<Supplier />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product" element={<Product/>}/>
          </Routes>
        </Grid>
      </ThemeProvider>
      {/* <PrimarySearchAppBar/> */}
    </div>
  );
}

export default App;
