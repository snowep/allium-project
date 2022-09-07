import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DashboardIcon from "@mui/icons-material/Dashboard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;
const drawerMenu = [
    {
        label: "Dashboard",
        icon: <DashboardIcon />,
    },
];
export default function LeftDrawer() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
                <List>
                    {drawerMenu.map((menu, index) => (
                        <ListItem button key={menu}>
                            <ListItemIcon>{menu.icon}</ListItemIcon>
                            <ListItemText primary={menu.label} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}
