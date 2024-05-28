import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom"
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
import Statement from "./Statement";
import Logout from "@mui/icons-material/Logout";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import Home from "./Home";
import UploardList from "./UploardList";
import PiracyComplaints from "./PiracyComplaints";
import Copyva_logo from "../../../../assets/Copyva_logo.png";
import MultiStepForm from "./MusicUplorad/index"
import MusicUplorad from "./MusicUplorad/index";
import UploardContent from "./UploardContent";
import ProfileSettings from "./ProfileSettings/ProfileSettings";

const AdminPanel = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Implement logout functionality
  };




  return (
    <div>
      <AppBar position="static" style={{ background: "black" }} className="top_barDashboard">
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
               Profile Settings
              </MenuItem>
              <MenuItem>
                <ListItemIcon component={Link} to="/dashboard/profile-settings">
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
          <Grid item xs={2.5}>
            <Paper className="left_nav">
              <List component="nav" style={{ background: "#2F3032", color: "white", height: "100vh" }}>
                <ListItem component={Link} to="/dashboard/home">
                  <ListItemIcon>
                    <HomeIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem component={Link} to="/dashboard/Statement">
                  <ListItemIcon>
                    <DescriptionIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Statement" />
                </ListItem>
                <ListItem component={Link} to="/dashboard/uploard-list">
                  <ListItemIcon>
                    <UploadIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Uploard List" />
                </ListItem>
                <ListItem component={Link} to="/dashboard/piracy-complaints">
                  <ListItemIcon>
                    <CancelIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Piracy Complaints" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={9.35} className="Dashboard_rightContent">
            <Paper>
              <Typography variant="h5"></Typography>
              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="Statement" element={<Statement />} />
                <Route path="uploard-list" element={<UploardList />} />
                <Route path="piracy-complaints" element={<PiracyComplaints />} />
                <Route path="Music-upload" element={<MusicUplorad />} />
                <Route path="upload-content" element={<UploardContent />} />
                <Route path="profile-settings" element={<ProfileSettings />} />
                
              </Routes>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AdminPanel;
