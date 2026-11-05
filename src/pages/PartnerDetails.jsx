import { Box, Button, Container, Grid, Typography } from "@mui/material";

import { LanguageOutlined, GroupsOutlined, PrecisionManufacturingOutlined, VerifiedOutlined } from "@mui/icons-material";

import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { partnerLogos } from "../data/partners";
import Hero from "../components/common/Hero";
import Partners_cover from "../assets/images/Partners_cover.jpg";

const iconMap = {
  quality: VerifiedOutlined,
  technology: PrecisionManufacturingOutlined,
  global: LanguageOutlined,
  solutions: GroupsOutlined,
};

export default function PartnerDetails() {
  const { id } = useParams();

  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  const partnersData = t("home.partners.items", {
    returnObjects: true,
    defaultValue: {},
  });

  const safePartnersData = partnersData && typeof partnersData === "object" && !Array.isArray(partnersData) ? partnersData : {};

  const partner = safePartnersData[id];

  const partnerLogo = partnerLogos[id];

  if (!partner) {
    return (
      <Box sx={{ minHeight: 500, py: 12, backgroundColor: "#F9F8F5", textAlign: "center" }}>
        <Container>
          <Typography sx={{ fontSize: 32, fontWeight: 800, mb: 3 }}>{t("home.partners.notFound")}</Typography>

          <Button component={Link} to="/partners" variant="contained">
            {t("home.partners.back")}
          </Button>
        </Container>
      </Box>
    );
  }
  return (
    <>
      <Hero title={t("home.partners.detailsTitle")} image={Partners_cover} breadcrumb={[t("home.partners.detailsTitle")]} />
      <Box component="section" dir={isArabic ? "rtl" : "ltr"} sx={{ backgroundColor: "#F9F8F5", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          {/* =========================
              Partner Information
          ========================= */}
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            {/* Text */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography sx={{ fontSize: { xs: 12, md: 15 }, fontWeight: 700, color: "#333", mb: 1 }}>{partner.title}</Typography>
              <Typography sx={{ fontSize: { xs: 17, md: 26 }, fontWeight: 800, color: "primary.main", mb: 2 }}>{partner.subtitle}</Typography>
              <Box>
                <Typography sx={{ fontSize: { xs: 10, md: 14 }, lineHeight: 2.2, color: "text.secondary", mb: 2 }}>
                  {partner.description} {partner.details}{" "}
                </Typography>
              </Box>
            </Grid>
            {/* Logo */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid #E5DED1",
                  borderBottom: "8px solid #C99A4A",
                  borderRight: "8px solid #C99A4A",
                  borderRadius: 2,
                  minHeight: { xs: 250, md: 280 },
                  height: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 5,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
                }}
              >
                <Box
                  component="img"
                  src={partnerLogo}
                  alt={partner.title}
                  sx={{ width: "70%", maxWidth: 300, maxHeight: 230, objectFit: "contain" }}
                />
              </Box>
            </Grid>
          </Grid>
          {/* =========================
              Features
          ========================= */}
          <Grid container sx={{ mt: { xs: 6, md: 7 } }}>
            {(Array.isArray(partner.features) ? partner.features : []).map((feature, index) => {
              const Icon = iconMap[feature.icon] || VerifiedOutlined;
              return (
                <Grid key={feature.title} size={{ xs: 6, md: 3 }}>
                  <Box
                    sx={{
                      minHeight: 130,
                      px: { xs: 1, md: 2 },
                      py: 2,
                      display: "flex",
                      flexDirection: "column",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      borderRight: isArabic && index !== 0 ? "1px solid #E5DED1" : "none",
                      borderLeft: !isArabic && index !== 0 ? "1px solid #E5DED1" : "none",
                    }}
                  >
                    {/* Icon */}
                    <Box sx={{ color: "primary.main", display: "flex", mb: 2, fontSize: "2rem" }}>
                      <Icon sx={{ fontSize: "2rem" }} />
                    </Box>
                    {/* Feature title */}
                    <Typography sx={{ fontSize: { xs: 15, md: 20 }, fontWeight: 700, color: "#222" }}>{t(feature.title)}</Typography>
                    {/* Feature description */}
                    <Typography sx={{ fontSize: { xs: 8, md: 14 }, color: "text.secondary", mt: 0.5 }}>{t(feature.description)}</Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          {/* =========================
              Explore Products
          ========================= */}
          <Box
            sx={{
              mt: { xs: 7, md: 9 },
              backgroundColor: "#F8F1E5",
              borderRadius: 3,
              px: { xs: 3, md: 6 },
              py: { xs: 5, md: 6 },
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            {/* Title */}
            <Typography sx={{ fontSize: { xs: 16, md: 22 }, fontWeight: 800, color: "#222", mb: 2 }}>{t("home.partners.exploreProducts")}</Typography>
            {/* Description */}
            <Typography sx={{ maxWidth: 750, mx: "auto", color: "text.secondary", lineHeight: 2, fontSize: { xs: 12, md: 15 } }}>
              {partner.description}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
