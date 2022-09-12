import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 220;
export default function TopNavBar({ auth, action }) {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const profileMenu = [
        {
            label: "Profile",
            link: "/profile",
        },
        {
            label: "Logout",
            link: route("logout"),
            method: "post",
            as: "button",
        },
    ];
    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,

                ml: { sm: `${drawerWidth}px` },
            }}
            elevation={0}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={action}
                    sx={{ mr: 2, display: { sm: "none" } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                    noWrap
                    component="div"
                >
                    Allium Project v0.1
                </Typography>
                <Box>
                    <Tooltip title={auth.user.name}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar
                                alt={auth.user.name}
                                // src="/static/images/avatar/2.jpg"
                            />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {profileMenu.map((item) => (
                            <MenuItem
                                onClick={handleCloseUserMenu}
                                key={item.label}
                            >
                                <Link
                                    href={item.link}
                                    method={item.method}
                                    as={item.as}
                                    color="inherit"
                                    underline="none"
                                >
                                    {item.label}
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
