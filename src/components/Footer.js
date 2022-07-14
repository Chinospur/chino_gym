import React from 'react';
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";


const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="20px" alignItems="center" px="40px" pt="24px">  
      <img src={Logo} alt="logo" style={{
          width: "80px", height: "80px", margin: "0 -5px"
        }} />
        <Typography variant='h5' pb="5px" mt="5px">
          Made by Emmanuel Onyekwelu 🙌
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer