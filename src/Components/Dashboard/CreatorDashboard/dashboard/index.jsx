import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Avatar,
  ListItemIcon,
  Tooltip,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import UploadIcon from '@mui/icons-material/Upload';
import CancelIcon from '@mui/icons-material/Cancel';

import "./dashboard.css";
// import AdminLogin from "./AdminLogin";
import Statement from "./Statement";
import Logout from "@mui/icons-material/Logout";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import Home from "./Home";
import UploardList from "./UploardList";
import PiracyComplaints from "./PiracyComplaints";
import Copyva_logo from "../../../../assets/Copyva_logo.png";

const AdminPanel = () => {
  // Static values

  // State for UI
  const [selectedNavItem, setSelectedNavItem] = React.useState("Home");
  const [authenticated, setAuthenticated] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // Handlers
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavItemClick = (itemName) => {
    setSelectedNavItem(itemName);
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  // Render the static UI
  return (
    <div>
      <AppBar position="static" style={{ background: "black" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={Copyva_logo} alt="logo" />
          <div>
            <Tooltip title="Account">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }} />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <ListItemIcon>
                  <EditNoteOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Change Password
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className="left_nav">
              {/* Left side: Navigation */}
              <List
                component="nav"
                style={{ background: "black", color: "white", height: "100vh" }}
              >
                <ListItem onClick={() => handleNavItemClick("Home")}>
                  <ListItemIcon>
                    <HomeIcon style={{ color: "white" }} />{" "}
                    {/* Add the icon component here */}
                  </ListItemIcon>
                  <ListItemText
                    primary="Home"
                    className={
                      selectedNavItem === "Home" ? "active_nav" : "nav_item"
                    }
                  />
                </ListItem>
                <ListItem onClick={() => handleNavItemClick("Statement")}>
                  <ListItemIcon>
                    <DescriptionIcon style={{ color: "white" }} />{" "}
                    {/* Add the icon component here */}
                  </ListItemIcon>

                  <ListItemText
                    primary="Statement"
                    className={
                      selectedNavItem === "Statement"
                        ? "active_nav"
                        : "nav_item"
                    }
                  />
                </ListItem>
               
                <ListItem onClick={() => handleNavItemClick("Uploard List")}>
                <ListItemIcon>
                    <UploadIcon style={{ color: "white" }} />{" "}
                    {/* Add the icon component here */}
                  </ListItemIcon>
                  <ListItemText
                    primary="Uploard List"
                    className={
                      selectedNavItem === "Uploard list"
                        ? "active_nav"
                        : "nav_item"
                    }
                  />
                </ListItem>
                <ListItem
                  onClick={() => handleNavItemClick("Piracy Complaints")}
                >
                
                <ListItemIcon>
                    <CancelIcon style={{ color: "white" }} />{" "}
                    {/* Add the icon component here */}
                  </ListItemIcon>
                  <ListItemText
                    primary="Piracy Complaints"
                    className={
                      selectedNavItem === "Piracy Complaints"
                        ? "active_nav"
                        : "nav_item"
                    }
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper>
              {/* Right side: Content */}
              <Typography variant="h5">{selectedNavItem}</Typography>
              {/* Content based on selected navigation item */}
              {selectedNavItem === "Home" && <Home />}
              {selectedNavItem === "uploardlist" && <UploardList />}
              {selectedNavItem === "Statement" && <Statement />}
              {selectedNavItem === "PiracyComplaints" && <PiracyComplaints />}
              {/* Add more content components for other navigation items */}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AdminPanel;
