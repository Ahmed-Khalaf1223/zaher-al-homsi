import { Box, Container, Divider, Grid, Link, Stack, Typography } from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo_footer from "/src/assets/images/logo-footer.png";

import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SOCIAL_ICONS = [LinkedInIcon, InstagramIcon, FacebookIcon];

function FooterHeading({ children, sx }) {
  return (
    <Typography variant="h6" color="primary" sx={[{ mb: 3, fontWeight: 800, fontSize: 18 }, ...(Array.isArray(sx) ? sx : [sx])]}>
      {children}
    </Typography>
  );
}

export default function Footer() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  const quickLinks = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.about"), path: "/about" },
    { label: t("nav.partners"), path: "/partners" },
    { label: t("nav.contact"), path: "/contact" },
  ];

  const contactItems = [
    { Icon: LocationOnOutlinedIcon, text: t("footer.address") },
    { Icon: PhoneOutlinedIcon, text: "+971 58 666 7859", ltr: true },
    { Icon: EmailOutlinedIcon, text: "info@zaheralhomsi.com", ltr: true },
  ];

  return (
    <Box component="footer" dir={isArabic ? "rtl" : "ltr"} sx={{ backgroundColor: "#FAF8F4", position: "relative", overflow: "hidden" }}>
      <Divider sx={{ borderColor: "primary.main", borderWidth: 2 }} />
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2, py: { xs: 5, sm: 6, md: 8 }, px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* ================= Logo ================= */}
          <Grid size={12} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
            <Box sx={{ width: { xs: 130, sm: 145, md: 150 } }}>
              <img src={logo_footer} alt="Zaher Al Homsi" style={{ width: "100%", display: "block" }} />
            </Box>
          </Grid>

          {/* ================= Description + Social ================= */}
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Typography sx={{ maxWidth: { xs: "100%", sm: 500, md: 360 }, fontSize: 14, lineHeight: 2, color: "text.secondary", mb: 3 }}>
              {t("footer.description")}
            </Typography>

            <Stack direction="row" sx={{ gap: 1.5 }}>
              {SOCIAL_ICONS.map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  sx={{
                    width: { xs: 40, md: 42 },
                    height: { xs: 40, md: 42 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    color: "primary.main",
                    transition: "0.3s",
                    "&:hover": { backgroundColor: "primary.main", color: "#fff" },
                  }}
                >
                  <Icon sx={{ fontSize: 20 }} />
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* ================= Quick Links ================= */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <FooterHeading>{t("footer.quickLinks")}</FooterHeading>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "repeat(2, auto)", md: "1fr" },
                justifyContent: "space-evenly",
                gap: 2,
                width: { xs: "100%", md: "auto" },
              }}
            >
              {quickLinks.map((item) => (
                <Link
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  underline="none"
                  color="text.primary"
                  sx={{ display: "flex", alignItems: "center", gap: 1.5, fontSize: 15, fontWeight: 600, "&:hover": { color: "primary.main" } }}
                >
                  <Box component="span" sx={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "primary.main", flexShrink: 0 }} />
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* ================= Contact Info ================= */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
            <Box sx={{ width: { xs: "100%", md: "auto" }, maxWidth: 300 }}>
              <FooterHeading sx={{ textAlign: { xs: "center", md: "start" } }}>{t("footer.contactInfo")}</FooterHeading>
              <Stack spacing={2}>
                {contactItems.map(({ Icon, text, ltr }) => (
                  <Box key={text} sx={{ display: "flex", alignItems: "center", gap: 1.5, justifyContent: { xs: "center", md: "flex-start" } }}>
                    <Icon color="primary" fontSize="small" sx={{ flexShrink: 0 }} />
                    <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 15 }, ...(ltr && { direction: "ltr", wordBreak: "break-word" }) }}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
