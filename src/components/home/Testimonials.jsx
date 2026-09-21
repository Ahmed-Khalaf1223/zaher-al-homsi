import { Box, Container, Typography, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "swiper/css";
import "swiper/css/navigation";

import logo from "/src/assets/images/logo-footer.png";
import SectionHeader from "../common/SectionHeader";

export default function Testimonials() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  const testimonials = [
    {
      id: 1,
      name: t("home.testimonials.items.ahmed.name"),
      description: t("home.testimonials.items.ahmed.description"),
    },
    {
      id: 2,
      name: t("home.testimonials.items.mohamed.name"),
      description: t("home.testimonials.items.mohamed.description"),
    },
    {
      id: 3,
      name: t("home.testimonials.items.khaled.name"),
      description: t("home.testimonials.items.khaled.description"),
    },
  ];

  return (
    <Box
      component="section"
      dir={isArabic ? "rtl" : "ltr"}
      sx={{
        backgroundColor: "#F8F1E5",
        py: { xs: 7, md: 10 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* =========================
            Section Header
        ========================= */}
        <SectionHeader
          title={t("home.testimonials.title")}
          subtitle={t("home.testimonials.subtitle")}
          description={t("home.testimonials.description")}
          maxWidthTitle={500}
          maxWidthSubtitle={500}
          maxWidthDescription={800}
        />
        {/* Slider */}
        <Box sx={{ position: "relative", px: { xs: 4, sm: 5, md: 6 } }}>
          <Swiper
            key={i18n.language}
            dir={isArabic ? "rtl" : "ltr"}
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            loop
            speed={700}
            slidesPerView={1}
            spaceBetween={25}
            breakpoints={{
              800: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    border: "1px solid #E5D9C8",
                    borderRadius: "15px",
                    minHeight: { xs: 260, md: 240 },
                    p: { xs: 2.5, md: 3 },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", flex: 1, gap: 2, mb: 5 }}>
                    <Box
                      component="img"
                      src={logo}
                      alt="Zaher Al Homsi"
                      sx={{
                        width: 100,
                        height: 100,
                        objectFit: "contain",
                        flexShrink: 0,
                        backgroundColor: "rgb(243, 237, 226)",
                        clipPath: "polygon(50% 0, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                      }}
                    />
                    <Typography
                      sx={{
                        flex: 1,
                        fontSize: { xs: 14, md: 15 },
                        fontWeight: 500,
                        lineHeight: 2,
                        textAlign: isArabic ? "right" : "left",
                        mt: 0,
                        color: "rgb(74, 74, 74)",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                  <Box sx={{ height: "1px", backgroundColor: "#E8DFD2" }} />
                  <Box sx={{ textAlign: isArabic ? "right" : "left" }}>
                    <Typography sx={{ fontWeight: 700, fontSize: 20, color: "#222", mt: 2 }}>{item.name}</Typography>
                    <Typography sx={{ color: "primary.main", fontSize: 18, letterSpacing: 2 }}>★★★★★</Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          <IconButton
            className="testimonial-prev"
            sx={{
              position: "absolute",
              left: { xs: -15, sm: -10, md: -20 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 44,
              height: 44,
              backgroundColor: "primary.main",
              color: "#fff",
              "&:hover": { backgroundColor: "#B8893B" },
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton
            className="testimonial-next"
            sx={{
              position: "absolute",
              right: { xs: -15, sm: -10, md: -20 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 44,
              height: 44,
              backgroundColor: "primary.main",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#B8893B",
              },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
