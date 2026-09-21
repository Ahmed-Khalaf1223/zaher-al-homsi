import { Box, Container, Grid, Paper, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import Features1 from "/src/assets/icons/Features1.png";
import Features2 from "/src/assets/icons/Features2.png";
import Features3 from "/src/assets/icons/Features3.png";
import Features4 from "/src/assets/icons/Features4.png";

const features = [
  {
    icon: Features1,
    title: "home.features.items.subsidiaries.title",
    description: "home.features.items.subsidiaries.description",
  },
  {
    icon: Features2,
    title: "home.features.items.investment.title",
    description: "home.features.items.investment.description",
  },
  {
    icon: Features3,
    title: "home.features.items.partnerships.title",
    description: "home.features.items.partnerships.description",
  },
  {
    icon: Features4,
    title: "home.features.items.products.title",
    description: "home.features.items.products.description",
  },
];

export default function Features() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <Box
      component="section"
      dir={isArabic ? "rtl" : "ltr"}
      sx={{
        backgroundColor: "#EDE6D8",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        {/* ================= Header ================= */}
        <Box
          sx={{
            textAlign: isArabic ? "right" : "left",
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 28, md: 34 },
              fontWeight: 800,
              color: "#151515",
              mb: 1,
            }}
          >
            {t("home.features.subtitle")}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 19, md: 26 },
              fontWeight: 700,
              color: "primary.main",
              mb: 2,
            }}
          >
            {t("home.features.title")}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 14, md: 18 },
              fontWeight: 400,
              lineHeight: 1.8,
              color: "text.primary",
              maxWidth: 750,
              ml: isArabic ? "auto" : 0,
              mr: isArabic ? 0 : "auto",
            }}
          >
            {t("home.features.description")}
          </Typography>
        </Box>

        {/* ================= Button ================= */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mb: 2,
          }}
        >
          <Button
            component={Link}
            to="/about"
            variant="contained"
            sx={{
              minWidth: 135,
              height: 48,
              borderRadius: 1,
              backgroundColor: "primary.main",
              color: "#fff",
              fontWeight: 700,
              fontSize: { xs: 14, md: 18 },
              boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
              "&:hover": {
                backgroundColor: "#B68A35",
              },
            }}
          >
            {t("home.features.more")}
          </Button>
        </Box>

        {/* ================= Features ================= */}
        <Grid container spacing={2.5}>
          {features.map((feature) => {
            return (
              <Grid key={feature.title} size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    px: { xs: 2, md: 3 },
                    py: 2,
                    border: "2px solid",
                    borderColor: "primary.main",
                    borderRadius: 1,
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2,
                    direction: isArabic ? "rtl" : "ltr",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: { xs: 45, md: 55 },
                      height: { xs: 45, md: 55 },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={feature.icon}
                      alt=""
                      sx={{
                        width: { xs: 38, md: 50 },
                        height: { xs: 38, md: 50 },
                        objectFit: "contain",
                        filter:
                          "brightness(0) saturate(100%) invert(66%) sepia(48%) saturate(600%) hue-rotate(355deg) brightness(90%) contrast(90%)",
                      }}
                    />
                  </Box>

                  {/* Text */}
                  <Box
                    sx={{
                      flex: 1,
                      textAlign: isArabic ? "right" : "left",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 16, md: 18 },
                        fontWeight: 800,
                        color: "primary.main",
                        mb: 0.5,
                      }}
                    >
                      {t(feature.title)}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 12, md: 18 },
                        lineHeight: 1.8,
                        color: "text.secondary",
                      }}
                    >
                      {t(feature.description)}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
