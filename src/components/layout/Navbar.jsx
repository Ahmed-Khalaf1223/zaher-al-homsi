import { useState } from "react";
import logo from "../../assets/images/logo.png";

import { AppBar, Box, Button, Container, Drawer, IconButton, Stack, Toolbar, useMediaQuery, useTheme } from "@mui/material";

import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

import MenuIcon from "@mui/icons-material/Menu";

import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../common/LanguageSwitcher";

export default function Navbar() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState(false);

  const isArabic = i18n.language === "ar";
  const direction = isArabic ? "rtl" : "ltr";

  const closeDrawer = () => {
    setOpen(false);
  };

  const navItems = [
    {
      label: t("nav.home"),
      path: "/",
    },
    {
      label: t("nav.about"),
      path: "/about",
    },
    {
      label: t("nav.partners"),
      path: "/partners",
    },
    {
      label: t("nav.contact"),
      path: "/contact",
    },
  ];

  return (
    <>
      {/* ==================== Top Bar ==================== */}
      <Box dir={direction} sx={{ height: 38, px: 4, backgroundColor: "primary.main", color: "#fff", display: "flex", alignItems: "center" }}>
        {/* Social Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <IconButton size="small" sx={{ color: "#fff", p: 0.5, "&:hover": { color: "#1877F2" } }}>
            <Facebook sx={{ fontSize: 18 }} />
          </IconButton>
          <IconButton size="small" sx={{ color: "#fff", p: 0.5, "&:hover": { color: "#E4405F" } }}>
            <Instagram sx={{ fontSize: 18 }} />
          </IconButton>
          <IconButton size="small" sx={{ color: "#fff", p: 0.5, "&:hover": { color: "#0A66C2" } }}>
            <LinkedIn sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>
      </Box>
      {/* ==================== Main Navbar ==================== */}
      <AppBar position="sticky" elevation={0} dir={direction} sx={{ backgroundColor: "transparent", color: "text.primary", boxShadow: "none" }}>
        <Container maxWidth="xl" sx={{ position: "absolute", mt: { xs: 0, md: 1 } }}>
          <Toolbar
            disableGutters
            sx={{
              width: "100%",
              height: 50,
              minHeight: 50,
              px: { xs: 2, md: 3 },
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "space-between", md: "space-between" },
              backgroundColor: "#fff",
              border: "1px solid #E7D6B7",
              borderRadius: "14px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
            }}
          >
            {/* ==================== Logo ==================== */}
            <Box component={Link} to="/" sx={{ width: "auto", height: 50, flexShrink: 0, display: "block", lineHeight: 0 }}>
              <img src={logo} alt="Zaher Al Homsi" style={{ width: "100%", height: "100%", display: "block", objectFit: "contain" }} />
            </Box>
            {/* ==================== Desktop Navigation ==================== */}
            {!isMobile && (
              <Stack direction="row" sx={{ justifyContent: "center", gap: 5, alignItems: "center" }}>
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    component={NavLink}
                    to={item.path}
                    sx={{
                      position: "relative",
                      minWidth: "auto",
                      px: { md: 1, lg: 1.2 },
                      color: "text.primary",
                      fontSize: { md: 15, lg: 17 },
                      fontWeight: 600,
                      "&:hover": { backgroundColor: "transparent", color: "primary.main" },
                      "&.active": {
                        color: "primary.main",
                        fontWeight: 700,
                      },
                      "&.active::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        backgroundColor: "primary.main",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
            )}

            {/* ==================== Desktop Language ==================== */}
            {!isMobile && (
              <Box sx={{ minWidth: { md: 90, lg: 110 }, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                <LanguageSwitcher />
              </Box>
            )}
            {/* ==================== Mobile Menu ==================== */}
            {isMobile && (
              <IconButton onClick={() => setOpen(true)} color="secondary">
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* ==================== Mobile Drawer ==================== */}
      <Drawer anchor={isArabic ? "right" : "left"} open={open} onClose={closeDrawer}>
        <Box dir={direction} sx={{ width: 280, height: "100%", p: 3 }}>
          {/* Logo */}
          <Box sx={{ width: 90, mb: 5, mx: "auto" }}>
            <img src={logo} alt="Zaher Al Homsi" style={{ width: "100%", display: "block" }} />
          </Box>

          {/* Navigation */}
          <Stack spacing={1}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={NavLink}
                to={item.path}
                onClick={closeDrawer}
                sx={{
                  justifyContent: "flex-start",
                  color: "text.primary",
                  fontSize: 15,
                  borderRadius: 1,
                  py: 1.2,
                  "&.active": { color: "primary.main", backgroundColor: "#FAF4E8" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
          {/* Language */}
          <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid #eee" }}>
            <LanguageSwitcher />
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
