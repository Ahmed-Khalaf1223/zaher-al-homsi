import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import coverHome1 from "../../assets/images/cover-home1.png";
import coverHome2 from "../../assets/images/cover-home2.png";

import "swiper/css";
import "swiper/css/pagination";
import CustomButton from "../common/CustomButton";

export default function HomeHero() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const images = [coverHome1, coverHome2];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 450, md: 550, lg: 600 },
        // Swiper
        "& .swiper": { width: "100%", height: "100%" },
        // =========================
        // Pagination
        // =========================
        "& .swiper-pagination": {
          bottom: { xs: 18, md: 25 },
        },
        "& .swiper-pagination-bullet": {
          width: 9,
          height: 9,
          backgroundColor: "#DCC49B",
          opacity: 1,
          transition: "all 0.3s ease",
        },

        "& .swiper-pagination-bullet-active": {
          width: 32,
          borderRadius: 10,
          backgroundColor: "#C99A45",
        },
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                top: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // =========================
                // Gradient
                // =========================
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background: {
                    xs: `
                      linear-gradient(
                        to bottom,
                        rgba(255,255,255,0.15) 0%, rgba(255,250,240,0.80) 100%
                      )
                    `,
                    md: `
                      linear-gradient(270deg, rgb(253, 251, 247) 35%, rgba(253, 251, 247, 0.85) 50%, rgba(253, 251, 247, 0) 85%)
                    `,
                  },

                  zIndex: 1,
                },

                // =========================
                // Soft White Glow
                // =========================
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "55%",
                  height: "100%",
                  right: 0,
                  top: 0,
                  background: "radial-gradient(circle at center, rgba(255,255,255,0.55), rgba(255,255,255,0))",
                  zIndex: 1,
                  pointerEvents: "none",
                },
              }}
            >
              {/* =========================
                  Content
              ========================= */}
              <Container
                maxWidth="xl"
                sx={{
                  height: "100%",
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  direction: isArabic ? "rtl" : "ltr",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: { xs: "100%", md: 650, lg: 700 },
                    ml: isArabic ? "auto" : 0,
                    mr: isArabic ? 0 : "auto",
                    textAlign: isArabic ? "right" : "left",
                    px: { xs: 3, sm: 4, md: 2 },
                    textShadow: "0 2px 12px rgba(255,255,255,0.8)",
                  }}
                >
                  {/* =========================
                      Subtitle
                  ========================= */}
                  <Typography
                    component="h1"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: 7, sm: 10, md: 22, lg: 33 },
                      color: "#222",
                      mb: { xs: 1, md: 1.5 },
                    }}
                  >
                    {t("home.hero.subtitle")}
                  </Typography>
                  {/* =========================
                      Main Title
                  ========================= */}
                  <Typography
                    component="h5"
                    sx={{
                      color: "primary.main",
                      fontWeight: 700,
                      fontSize: { xs: 20, md: 28 },
                      lineHeight: 1.25,
                      mb: { xs: 2, md: 2.5 },
                      textShadow: "0 3px 15px rgba(255,255,255,0.9)",
                    }}
                  >
                    {t("home.hero.title")}
                  </Typography>

                  {/* =========================
                      Description
                  ========================= */}
                  <Typography
                    component="p"
                    sx={{
                      color: "text.primary",
                      fontSize: { xs: 10, md: 15 },
                      lineHeight: 2,
                      maxWidth: 600,
                      ml: isArabic ? "auto" : 0,
                      mr: isArabic ? 0 : "auto",
                      mb: { xs: 3, md: 4 },
                      textShadow: "0 2px 10px rgba(255,255,255,0.9)",
                    }}
                  >
                    {t("home.hero.description")}
                  </Typography>

                  {/* =========================
                      Buttons
                  ========================= */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: { xs: 1.5, md: 2 },
                      justifyContent: "flex-start",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* More Button */}
                    <CustomButton
                      to="/about"
                      sx={{
                        px: 3,
                        boxShadow: "0 6px 18px rgba(201,154,69,0.35)",
                      }}
                    >
                      {t("home.hero.more")}
                    </CustomButton>
                    {/* Consultation Button */}
                    <CustomButton
                      to="/contact"
                      variant="outlined"
                      sx={{
                        px: 3,
                        border: "2px solid #C99A45",
                        color: "#C99A45",
                        backgroundColor: "rgba(255,255,255,0.65)",
                        backdropFilter: "blur(5px)",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                        "&:hover": {
                          backgroundColor: "rgb(197, 152, 80)",
                          color: "#fff",
                          border: "2px solid rgb(197, 152, 80)",
                        },
                      }}
                    >
                      {t("home.hero.consultation")}
                    </CustomButton>
                  </Box>
                </Box>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
