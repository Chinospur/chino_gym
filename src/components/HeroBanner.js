import React from 'react';
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {

    return (
        <Box sx={{
            mt: { lg: "212px", xs: "106px" },
            ml: { sm: "50px", xs: "25px" }
        }} position="relative" p="10px">
            <Typography color="#FF2625"
                fontWeight="600" fontSize="26px" >
                Chinospur Team
            </Typography>
            <Typography
                fontWeight={700}
                sx={{ fontSize: { lg: "44px", xs: "40px" } }} mb="23px" mt="30px" >
                Too Much is not <br /> Enough, <br /> Stay Hungry!
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={3}>
                Get the most pumping routine Here.
            </Typography>
            <Button variant="contained" 
            color="warning" href="#exercises" sx={{
                backgroundColor: "#f4abaa",
                padding: "10px"
            }}>
                More Exercises
            </Button>
            <Typography 
            fontWeight={600}
            color="#ff2625"
            sx={{
                opacity: 0.1, 
                display: { lg: "block", xs: "none"}}} 
            fontSize="250px" mt={20} alignItems="center">
                Pumped!
            </Typography>
            <img src={HeroBannerImage} alt="banner" 
            className="hero-banner-img" />
        </Box>
    )
}

export default HeroBanner