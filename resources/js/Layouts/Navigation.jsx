import * as React from "react";
// material
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// atoms and/or molecules
import TopNavBar from "@/Components/TopNavBar";
import LeftDrawer from "@/Components/LeftDrawer";

export default function Navigation(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <TopNavBar auth={props.auth} action={handleDrawerToggle} />
            <LeftDrawer action={handleDrawerToggle} open={mobileOpen} />
            {props.children}
        </Box>
    );
}
