import React from 'react';
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack direction="column" sx={{
      gap: {
        sm: "0px", xs: "0px"
      }, mt: { sm: "5px", xs: "5px" }, justifyContent: "none"
    }} px="10px">
      <Link to="/">
        <img src={Logo} alt="logo" style={{
          width: "80px", height: "80px", margin: "0 -5px"
        }} />
      </Link>
      <Stack direction="column" gap="10px" fontSize="30px" alignItems="none">
        <Link to="/" style={{ textDecoration: "none", color: "#3A1212", borderBottom: "2px solid #ff2625" }}>
          Home
        </Link>
        <a href='#exercises' style={{ textDecoration: "none", color: "#3A1212" }}>
          Exercises
        </a>
      </Stack>
    </Stack>

  )
}

export default Navbar