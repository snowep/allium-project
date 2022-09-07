import React from "react";
// material
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// atoms and/or molecules
import TopNavBar from "@/Components/TopNavBar";
import LeftDrawer from "@/Components/LeftDrawer";

export default function Navigation(props) {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <TopNavBar auth={props.auth} />
            <LeftDrawer />
            {props.children}
        </Box>
    );
}
