import { Navbar } from "../Navbar/Navbar";
import { useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Link } from "react-router-dom";
export const Profile = () => {
  const [user, setUser] = useState({
    mobileNo: "",
    password: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handelClick = async () => {
    const { mobileNo, password } = user;
    // console.log(user)
    if (mobileNo && password) {
      axios.post("http://localhost:5555/login", user).then((res) => {
        // console.log(res.data);
        alert(res.data.messsage);
      });
    }
  };
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: 405,
          borderRadius: 5,
          margin: "auto",
          border: 1,
          marginTop: 25,
        }}
      >
        <Box sx={{ height: 230, width: 400 }}>
          <img
            width="400px"
            style={{ borderRadius: "5px" }}
            src="https://images.meesho.com/images/marketing/1661417516766.webp"
            alt=""
          />
          <h3 style={{ fontSize: "15px", marginTop: "35px" }}>
            Sign Up to view your profile
          </h3>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            marginTop: 8,
          }}
          noValidate
          autoComplete="off"
        >
          <input
            placeholder="IN +91"
            style={{
              margin: "auto",
              marginTop: "17px",
              borderRight: "none",
              borderLeft: "none",
              borderTop: "none",
              width: "50px",
            }}
          />
          <TextField
            id="standard-basic"
            label="Enter Number"
            variant="standard"
            inputProps={{ maxLength: 12 }}
            type="number"
            required={true}
            erorText="Please enter only 12 digits number"
            sx={{ marginLeft: "15px" }}
            onChange={handelChange}
            value={user.mobileNo}
            name="mobileNo"
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            inputProps={{ maxLength: 12 }}
            type="text"
            required={true}
            erorText="Please enter only 12 digits number"
            sx={{ marginLeft: "58px" }}
            onChange={handelChange}
            value={user.password}
            name="password"
          />
        </Box>
        <div>
          <Link to="/">
            <button
              onClick={handelClick}
              style={{
                marginTop: "15px",
                width: "250px",
                marginLeft: "45px",
                color: "white",
                backgroundColor: "#F43397",
                padding: "10px",
              }}
            >
              Continue
            </button>
          </Link>
        </div>
      </Box>
    </>
  );
};
