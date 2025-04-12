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

import PropTechLogo from "../assets/images/proptech-logo.png";

interface Page {
  name: string;
  path: string;
}

interface ResponsiveHeaderProps {
  title?: string;
  logoUrl?: string;
}

// Adjust the offset if you have a fixed header or need a specific alignment.
// A negative offset moves the scroll position upward (revealing more of the section).
const SCROLL_OFFSET = -80;

const ResponsiveHeader: React.FC<ResponsiveHeaderProps> = ({
  title = "PropTech",
  logoUrl = PropTechLogo,
}) => {
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
  const [isClosing, setIsClosing] = React.useState<boolean>(false);

  const pages: Page[] = [
    {name: "Who We Are", path: "#who-we-are"},
    {name: "What We Do", path: "#what-we-do"},
    {name: "Why Choose Us?", path: "#why-choose-us"},
    // {name: "Let's Build Together", path: "#lets-build-together"},
    {name: "Contact Us", path: "#contact-us"},
  ];

  // Smooth scroll to the target element with an offset.
  const handleNavClick = (
    path: string,
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    event.preventDefault();
    // Remove the '#' to get the target element's id.
    const targetId = path.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      // Get the element's top relative to the viewport and add the current scroll position.
      const elementTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      // Apply the offset.
      const finalPosition = elementTop + SCROLL_OFFSET;
      window.scrollTo({
        top: finalPosition,
        behavior: "smooth",
      });
    }
    // Close the mobile drawer if it's open.
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
          {title}
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
            {/* Desktop Logo */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
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
              <Typography component={"img"} src={logoUrl} alt={title} />
            </Typography>

            {/* Mobile Menu Icon */}
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

            {/* Mobile Logo */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href={logoUrl}
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
              <Typography component={"img"} src={logoUrl} alt={title} />
            </Typography>

            {/* Desktop Navigation Buttons */}
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

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
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
