import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  Avatar,
  Badge,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import AxiosInstance from "../config/AxiosInstance";
import Footer from "./Footer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

import LrLogo from "../assets/images/proptech-logo.png";
import {ArrowDropDown, ExitToAppOutlined, Settings} from "@mui/icons-material";

import {profileMenuItems, Routes} from "../data/NavbarRoutes";

const drawerWidth = 280;

type NavBarProps = {
  window?: () => Window;
  children?: React.ReactNode;
};

export default function NavBar(props: NavBarProps) {
  const {window, children} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [profileDrawerOpen, setProfileDrawerOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const locRouter = useLocation();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const toggleProfileDrawer = () => {
    setProfileDrawerOpen(!profileDrawerOpen);
    handleCloseMenu();
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const signOut = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await AxiosInstance.delete(`sign-out`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.status === 200) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
        location.href = "/login";
      }
    } catch (e) {
      console.log(e);
    }
  };

  const isActiveRoute = (path: string) => {
    const active = locRouter.pathname === path;
    return {
      backgroundColor: active ? "rgba(239, 68, 68, 0.08)" : "transparent",
      color: active ? "#EF4444" : "#64748B",
      "&:hover": {
        backgroundColor: "rgba(239, 68, 68, 0.04)",
        color: "#EF4444",
      },
    };
  };

  const mainDrawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#ffffff",
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        }}>
        <Link to="/" style={{textDecoration: "none", display: "inline-block"}}>
          <img
            src={LrLogo}
            alt="Leuterio Realty"
            draggable={false}
            style={{height: "60px", marginBlock: 5,}}
          />
        </Link>
      </Box>

      <Box sx={{flex: 1, overflowY: "auto"}}>
        <List sx={{px: 2, py: 1}}>
          {Routes.map((route) => {
            const Icon = route.icon;
            const active = locRouter.pathname === route.path;

            return (
              <ListItemButton
                key={route.path}
                component={Link}
                to={route.path}
                sx={{
                  py: 1.5,
                  mb: 0.5,
                  borderRadius: 1.5,
                  transition: "all 0.2s ease-in-out",
                  ...isActiveRoute(route.path),
                }}>
                <ListItemIcon
                  sx={{
                    color: active ? "#EF4444" : "#64748B",
                    minWidth: 40,
                    transition: "color 0.2s ease-in-out",
                  }}>
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={route.title}
                  primaryTypographyProps={{
                    fontSize: "0.875rem",
                    fontWeight: active ? 600 : 500,
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>

      <Box sx={{p: 2, borderTop: "1px solid rgba(0, 0, 0, 0.06)"}}>
        <ListItemButton
          onClick={signOut}
          sx={{
            py: 1.5,
            borderRadius: 1.5,
            color: "#64748B",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: "rgba(239, 68, 68, 0.04)",
              color: "#EF4444",
            },
          }}>
          <ListItemIcon sx={{color: "inherit", minWidth: 40}}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          />
        </ListItemButton>
      </Box>
    </Box>
  );

  const profileDrawer = (
    <Box
      sx={{
        width: 350,
        p: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}>
      <Box sx={{display: "flex", alignItems: "center", mb: 3}}>
        <Typography variant="h6" sx={{color: "#1F2937", fontWeight: 600}}>
          Profile Menu
        </Typography>
      </Box>
      <Box sx={{p: 2, borderBottom: "1px solid rgba(0, 0, 0, 0.06)"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Avatar
            sx={{
              width: 250,
              height: 250,
              bgcolor: "#EF4444",
              fontWeight: "bold",
            }}
            alt="John Doe">
            JD
          </Avatar>
          <Box sx={{textAlign: "center", mt: 1}}>
            <Typography
              variant="subtitle1"
              sx={{fontWeight: 600, color: "#1F2937"}}>
              John Doe
            </Typography>
            <Typography variant="body2" sx={{color: "#64748B"}}>
              Admin
            </Typography>
          </Box>
        </Box>
      </Box>
      <List>
        {profileMenuItems.map((item) => (
          <ListItemButton
            key={item.title}
            sx={{
              borderRadius: 1.5,
              mb: 1,
              color: "#64748B",
              "&:hover": {
                backgroundColor: "rgba(239, 68, 68, 0.04)",
                color: "#EF4444",
              },
            }}>
            <ListItemIcon sx={{color: "inherit"}}>
              <item.icon />
            </ListItemIcon>
            <ListItemText
              primary={item.title}
              primaryTypographyProps={{
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{display: "flex", minHeight: "100vh", bgcolor: "#F9FAFB"}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: {sm: `calc(100% - ${drawerWidth}px)`},
          ml: {sm: `${drawerWidth}px`},
          bgcolor: "#ffffff",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        }}>
        <Toolbar sx={{justifyContent: "space-between", height: 77}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: {sm: "none"},
              color: "#64748B",
              "&:hover": {
                color: "#EF4444",
              },
            }}>
            <MenuIcon />
          </IconButton>

          <Box sx={{display: "flex", alignItems: "center", gap: 3}} />

          <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
            <IconButton
              size="large"
              sx={{
                color: "#64748B",
                "&:hover": {
                  bgcolor: "rgba(239, 68, 68, 0.04)",
                  color: "#EF4444",
                },
              }}>
              <Badge badgeContent={8} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <Button
              onClick={handleMenu}
              sx={{
                color: "#64748B",
                textTransform: "none",
                gap: 1,
                "&:hover": {
                  bgcolor: "rgba(239, 68, 68, 0.04)",
                  color: "#EF4444",
                },
              }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: "#EF4444",
                  fontWeight: "bold",
                }}
                alt="John Doe">
                JD
              </Avatar>
              <Typography variant="subtitle2" fontWeight={500}>
                John Doe
              </Typography>
              <ArrowDropDown />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    mt: 1.5,
                    boxShadow:
                      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                    borderRadius: 2,
                    width: 200,
                  },
                },
              }}>
              <MenuItem onClick={toggleProfileDrawer}>
                <PersonIcon fontSize="small" sx={{mr: 1}} />
                Profile
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                <Settings fontSize="small" sx={{mr: 1}} />
                Settings
              </MenuItem>
              <Divider />
              <MenuItem onClick={signOut} sx={{color: "#EF4444"}}>
                <ExitToAppOutlined fontSize="small" sx={{mr: 1}} />
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{keepMounted: true}}
          sx={{
            display: {xs: "block", sm: "none"},
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              bgcolor: "#ffffff",
              borderRight: "1px solid rgba(0, 0, 0, 0.06)",
            },
          }}>
          {mainDrawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: {xs: "none", sm: "block"},
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              bgcolor: "#ffffff",
              borderRight: "1px solid rgba(0, 0, 0, 0.06)",
            },
          }}
          open>
          {mainDrawer}
        </Drawer>
      </Box>

      <Drawer
        anchor="right"
        open={profileDrawerOpen}
        onClose={() => setProfileDrawerOpen(false)}>
        {profileDrawer}
      </Drawer>

      <Box
        sx={{
          flexGrow: 1,
          width: {sm: `calc(100% - ${drawerWidth}px)`},
          bgcolor: "#F9FAFB",
          minHeight: "100vh",
        }}>
        <Box component="main" sx={{width: "100%"}}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
