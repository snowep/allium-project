import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DashboardIcon from "@mui/icons-material/Dashboard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 220;
export default function LeftDrawer({ action, open }) {
    const drawerMenu = [
        {
            label: "Dashboard",
            icon: <DashboardIcon />,
        },
    ];
    const drawer = (
        <div>
            <Toolbar />
            <List>
                {drawerMenu.map((menu, index) => (
                    <ListItem button key={menu}>
                        <ListItemIcon>{menu.icon}</ListItemIcon>
                        <ListItemText primary={menu.label} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window.document.body : undefined;
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShink: { sm: 0 } }}
        >
            <Drawer
                container={container}
                variant="temporary"
                open={open}
                onClose={action}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                    },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", sm: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                    },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    );
}
