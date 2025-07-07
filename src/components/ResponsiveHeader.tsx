import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {Link, useNavigate} from "react-router-dom";

import PropTechLogo from "../assets/images/proptech-logo.png";

interface Page {
  name: string;
  path: string;
}

interface ResponsiveHeaderProps {
  title?: string;
  logoUrl?: string;
}

const SCROLL_OFFSET = -80;

const ResponsiveHeader: React.FC<ResponsiveHeaderProps> = ({
  title = "PropTech",
  logoUrl = PropTechLogo,
}) => {
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
  const [isClosing, setIsClosing] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const pages: Page[] = [
    {name: "About Us", path: "/About"},
    {name: "Who We Are", path: "#who-we-are"},
    {name: "What We Do", path: "#what-we-do"},
    {name: "Why Choose Us?", path: "#why-choose-us"},
    {name: "Contact Us", path: "#contact-us"},
  ];

  const handleNavClick = (
    path: string,
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    event.preventDefault();

    if (path.startsWith("#")) {
      const targetId = path.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const elementTop =
          element.getBoundingClientRect().top + window.pageYOffset;
        const finalPosition = elementTop + SCROLL_OFFSET;
        window.scrollTo({
          top: finalPosition,
          behavior: "smooth",
        });
      }
    } else {
      navigate(path);
    }

    if (mobileOpen) {
      handleDrawerClose();
    }
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const drawer = (
    <Box onClick={handleDrawerClose} sx={{textAlign: "center"}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}>
        <Typography variant="h6" sx={{my: 2}}>
          <Typography
            component={"img"}
            src={logoUrl}
            alt={title}
            sx={{width: "100%", maxWidth: "7em"}}
          />
        </Typography>
        <IconButton aria-label="close drawer" onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton
              sx={{textAlign: "center"}}
              onClick={(e) =>
                handleNavClick(
                  page.path,
                  e as unknown as React.MouseEvent<HTMLButtonElement>
                )
              }>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar
        position="static"
        sx={{backgroundColor: "transparent", color: "white", px: 1}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                py: 1,
                my: 2,
                display: {xs: "none", md: "flex"},
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              <Typography
                component={"img"}
                src={logoUrl}
                alt={title}
                sx={{width: "100%", maxWidth: "11em"}}
              />
            </Typography>

            <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
              <IconButton
                size="large"
                aria-label="open drawer"
                edge="start"
                color="inherit"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}>
                <MenuIcon sx={{color: "black"}} />
              </IconButton>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href={"/"}
              sx={{
                mr: 2,
                display: {xs: "flex", md: "none"},
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              <Typography
                component={"img"}
                src={logoUrl}
                alt={title}
                sx={{width: "100%", maxWidth: "7em"}}
              />
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: {xs: "none", md: "flex"},
                justifyContent: "flex-end",
              }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={(e) => handleNavClick(page.path, e)}
                  sx={{
                    fontFamily: "Comfortaa",
                    fontSize: "16px",
                    py: 1,
                    color: "black",
                    display: "block",
                    textTransform: "none",
                  }}>
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {xs: "block", md: "none"},
          "& .MuiDrawer-paper": {boxSizing: "border-box", width: 240},
        }}>
        {drawer}
      </Drawer>
    </Box>
  );
};

export default ResponsiveHeader;
