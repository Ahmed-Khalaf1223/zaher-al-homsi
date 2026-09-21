import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import PartnerSwiperCard from "./PartnerSwiperCard";

export default function PartnerSwiper() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  const partnersData = t("home.partners.items", {
    returnObjects: true,
  });

  const partners = Object.entries(partnersData).map(([id, partner]) => ({
    id,
    ...partner,
  }));

  const loopPartners = [...partners, ...partners, ...partners, ...partners, ...partners];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "visible",
        px: { xs: 4, sm: 5, md: 12 },
      }}
    >
      <Swiper
        key={i18n.language}
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".partners-prev",
          nextEl: ".partners-next",
        }}
        centeredSlides
        loop
        slidesPerGroup={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={900}
        slidesPerView={1.1}
        spaceBetween={20}
        breakpoints={{
          600: {
            slidesPerView: 1.5,
            spaceBetween: 25,
          },
          900: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        dir={isArabic ? "rtl" : "ltr"}
        style={{
          overflow: "visible",
          paddingTop: "55px",
          paddingBottom: "40px",
        }}
      >
        {loopPartners.map((partner, index) => (
          <SwiperSlide key={`${partner.id}-${index}`}>{({ isActive }) => <PartnerSwiperCard partner={partner} isActive={isActive} />}</SwiperSlide>
        ))}
      </Swiper>

      {/* Previous */}
      <Box
        className="partners-prev"
        sx={{
          position: "absolute",
          left: { xs: 5, md: 0 },
          top: "55%",
          transform: "translateY(-50%)",
          width: { xs: 42, md: 52 },
          height: { xs: 42, md: 52 },
          borderRadius: "50%",
          backgroundColor: "primary.main",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 10,
          transition: "0.3s",

          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </Box>

      {/* Next */}
      <Box
        className="partners-next"
        sx={{
          position: "absolute",
          right: { xs: 5, md: 0 },
          top: "55%",
          transform: "translateY(-50%)",
          width: { xs: 42, md: 52 },
          height: { xs: 42, md: 52 },
          borderRadius: "50%",
          backgroundColor: "primary.main",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 10,
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </Box>
    </Box>
  );
}
