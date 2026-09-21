import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";

import WhyUsImage from "../../assets/images/whyus.png";

const items = [
  {
    icon: WorkspacePremiumOutlinedIcon,
    title: "home.whyUs.quality.title",
    description: "home.whyUs.quality.description",
  },
  {
    icon: VerifiedOutlinedIcon,
    title: "home.whyUs.experience.title",
    description: "home.whyUs.experience.description",
  },
  {
    icon: TrendingUpOutlinedIcon,
    title: "home.whyUs.development.title",
    description: "home.whyUs.development.description",
  },
  {
    icon: LayersOutlinedIcon,
    title: "home.whyUs.diversity.title",
    description: "home.whyUs.diversity.description",
  },
];

export default function WhyUs() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <Box
      component="section"
      dir={isArabic ? "rtl" : "ltr"}
      sx={{
        backgroundColor: "#F8F6F1",
        py: 4,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        {/* =========================
            Image + Text
        ========================= */}
        <Grid container spacing={{ xs: 4, md: 7 }} alignItems="center" direction="ltr">
          {/* =========================
              Image - LEFT
          ========================= */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ width: "100%", height: { xs: 320, sm: 400, md: 470 }, borderRadius: "12px", overflow: "hidden" }}>
              <Box component="img" src={WhyUsImage} alt="Why Us" sx={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }} />
            </Box>
          </Grid>

          {/* =========================
              Text - RIGHT
          ========================= */}
          <Grid size={{ xs: 12, md: 7 }} sx={{ direction: isArabic ? "rtl" : "ltr", display: "flex", alignItems: "center" }}>
            <Box sx={{ textAlign: isArabic ? "right" : "left", maxWidth: 750, mb: { xs: 4, md: 20 } }}>
              {/* Subtitle */}
              <Typography sx={{ fontSize: { xs: 18, md: 26 }, fontWeight: 800, color: "#171717", mb: 1.5 }}>{t("home.whyUs.subtitle")}</Typography>

              {/* Main Title */}
              <Typography sx={{ fontSize: { xs: 27, sm: 32, md: 35 }, fontWeight: 800, lineHeight: 1.4, color: "primary.main", mb: 2 }}>
                {t("home.whyUs.title")}
              </Typography>
              {/* Description */}
              <Typography sx={{ fontSize: { xs: 14, md: 20 }, fontWeight: 400, lineHeight: 1.8, color: "text.primary" }}>
                {t("home.whyUs.description")}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* =========================
            Gold Features Box
        ========================= */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: { xs: "100%", sm: "100%", md: "63.5%" },
            mt: { xs: 3, sm: 3, md: -22 },
            ml: { xs: 0, sm: 0, md: isArabic ? 0 : "auto" },
            mr: { xs: 0, sm: 0, md: isArabic ? "auto" : 0 },
            backgroundColor: "primary.main",
            borderRadius: 3,
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 3, sm: 3, md: 3.5 },
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
            boxSizing: "border-box",
          }}
        >
          <Grid container spacing={{ xs: 3, md: 3.5 }} sx={{ alignItems: "center", direction: isArabic ? "rtl" : "ltr" }}>
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: 1.5, md: 2 },
                      direction: isArabic ? "rtl" : "ltr",
                      textAlign: isArabic ? "right" : "left",
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        width: { xs: 55, md: 60 },
                        height: { xs: 55, md: 60 },
                        minWidth: { xs: 55, md: 60 },
                        flexShrink: 0,
                        borderRadius: "12px",
                        backgroundColor: "rgba(255, 255, 255, 0.25)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon sx={{ fontSize: { xs: 30, md: 34 } }} />
                    </Box>
                    {/* Text */}
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ color: "#fff", fontSize: { xs: 14, md: 16 }, fontWeight: 800, lineHeight: 1.6, mb: 0.5 }}>
                        {t(item.title)}
                      </Typography>
                      <Typography sx={{ color: "rgba(255, 255, 255, 0.92)", fontSize: { xs: 11, md: 12 }, lineHeight: 1.8 }}>
                        {t(item.description)}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
