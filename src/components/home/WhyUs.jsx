import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";

import WhyUsImage from "../../assets/images/whyUs.png";
import SectionTitle from "../common/SectionTitle";

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
    <Box component="section" dir={isArabic ? "rtl" : "ltr"} sx={{ backgroundColor: "#F8F6F1", py: 4, overflow: "hidden" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "463px minmax(0, 1fr)" },
            gridTemplateAreas: {
              xs: '"text" "features" "image"',
              md: '"image text" "features features"',
            },
            columnGap: 2,
            rowGap: { xs: 3, md: 0 },
            alignItems: "center",
          }}
        >
          {/* =========================
              Image
          ========================= */}
          <Box sx={{ gridArea: "image", width: "100%", height: { xs: 320, sm: 400, md: 450 }, borderRadius: "12px", overflow: "hidden" }}>
            <Box component="img" src={WhyUsImage} alt="Why Us" sx={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }} />
          </Box>

          {/* =========================
              Text
          ========================= */}
          <Box sx={{ gridArea: "text", width: "100%", maxWidth: 750, mb: { md: 20 } }}>
            <SectionTitle
              eyebrow={t("home.whyUs.subtitle")}
              title={t("home.whyUs.title")}
              description={t("home.whyUs.description")}
              align={isArabic ? "right" : "left"}
            />
          </Box>

          {/* =========================
              Gold Features Box
          ========================= */}
          <Box
            sx={{
              gridArea: "features",
              position: "relative",
              zIndex: 2,
              width: { xs: "100%", md: "75%" },
              justifySelf: { md: "end" },
              mt: { md: -22 },
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
        </Box>
      </Container>
    </Box>
  );
}
