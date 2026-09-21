import { Box, Container, Divider, Link, Stack, Typography } from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo_footer from "/src/assets/images/logo-footer.png";

import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <Box component="footer" dir={isArabic ? "rtl" : "ltr"} sx={{ backgroundColor: "#FAF8F4", position: "relative", overflow: "hidden" }}>
      <Divider sx={{ borderColor: "primary.main", borderWidth: 2 }} />
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2, py: { xs: 5, sm: 6, md: 8 }, px: { xs: 3, sm: 4, md: 5 } }}>
        {/* ================= Logo ================= */}
        <Box
          sx={{
            width: { xs: 130, sm: 145, md: 150 },
            mb: { xs: 4, md: 6 },
            mx: { xs: "auto", md: 0 },
          }}
        >
          <img
            src={logo_footer}
            alt="Zaher Al Homsi"
            style={{
              width: "100%",
              display: "block",
            }}
          />
        </Box>

        {/* ================= Footer Content ================= */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-around", md: "space-between" },
            flexDirection: { xs: "column", sm: "row", md: "row" },
            flexWrap: "wrap",
            gap: { xs: 5, sm: 6, md: 8 },
          }}
        >
          {/* ================= Description ================= */}
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "auto" },
              textAlign: { xs: "center", md: isArabic ? "right" : "left" },
            }}
          >
            <Typography
              sx={{
                maxWidth: { xs: "100%", sm: 500, md: 360 },
                mx: { xs: "auto", md: isArabic ? 0 : 0 },
                fontSize: { xs: 14, sm: 15, md: 16 },
                lineHeight: 2,
                color: "text.secondary",
                mb: 3,
              }}
            >
              {t("footer.description")}
            </Typography>

            {/* Social Icons */}
            <Stack direction="row" sx={{ gap: 1.5, justifyContent: { xs: "center", md: isArabic ? "flex-start" : "flex-start" } }}>
              {[LinkedInIcon, InstagramIcon, FacebookIcon].map((Icon, index) => (
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
          </Box>

          {/* ================= Quick Links ================= */}
          <Box
            sx={{
              textAlign: "center",
              width: { xs: "100%", sm: "100%", md: "auto" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" color="primary" sx={{ mb: 3, fontWeight: 800, fontSize: { xs: 19, md: 22 } }}>
              {t("footer.quickLinks")}
            </Typography>
            <Stack sx={{ gap: 2, alignItems: "center" }}>
              {[
                { label: t("nav.home"), path: "/" },
                { label: t("nav.about"), path: "/about" },
                { label: t("nav.partners"), path: "/partners" },
                { label: t("nav.contact"), path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  underline="none"
                  color="text.primary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    gap: 1.5,
                    fontSize: { xs: 15, md: 17 },
                    fontWeight: 600,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Box component="span" sx={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "primary.main", flexShrink: 0 }} />
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Box>
          {/* ================= Contact Info ================= */}
          <Box>
            <Typography
              variant="h6"
              color="primary"
              sx={{ mb: 3, fontWeight: 800, fontSize: { xs: 19, md: 22 }, textAlign: { xs: "center", md: isArabic ? "right" : "left" } }}
            >
              {t("footer.contactInfo")}
            </Typography>
            <Stack spacing={2} sx={{ width: "100%", maxWidth: 300, mx: { md: 0 }, mr: { xs: "auto" } }}>
              {/* Address */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, width: "100%", direction: isArabic ? "rtl" : "ltr" }}>
                <LocationOnOutlinedIcon color="primary" fontSize="small" sx={{ flexShrink: 0 }} />
                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 15 } }}>{t("footer.address")}</Typography>
              </Box>
              {/* Phone */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, width: "100%", direction: isArabic ? "rtl" : "ltr" }}>
                <PhoneOutlinedIcon color="primary" fontSize="small" sx={{ flexShrink: 0 }} />
                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 15 }, direction: "ltr" }}>+971 58 666 7859</Typography>
              </Box>
              {/* Email */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, width: "100%", direction: isArabic ? "rtl" : "ltr" }}>
                <EmailOutlinedIcon color="primary" fontSize="small" sx={{ flexShrink: 0 }} />

                <Typography sx={{ fontWeight: 600, fontSize: { xs: 14, md: 15 }, direction: "ltr", wordBreak: "break-word" }}>
                  info@zaheralhomsi.com
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
      {/* Background */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: { xs: 180, md: 300 },
          opacity: 0.12,
          pointerEvents: "none",
          backgroundImage: "url('/images/footer-bg.png')",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
    </Box>
  );
}
