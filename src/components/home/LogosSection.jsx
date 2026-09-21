import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import LogosSection1 from "../../assets/icons/LogosSection1.png";
import LogosSection2 from "../../assets/icons/LogosSection2.png";
import LogosSection3 from "../../assets/icons/LogosSection3.png";
import LogosSection4 from "../../assets/icons/LogosSection4.png";
import LogosSection5 from "../../assets/icons/LogosSection5.png";
import LogosSection6 from "../../assets/icons/LogosSection6.png";

import "swiper/css";

const logos = [
  { image: LogosSection1, filter: false },
  { image: LogosSection2, filter: true },
  { image: LogosSection3, filter: true },
  { image: LogosSection4, filter: true },
  { image: LogosSection5, filter: true },
  { image: LogosSection6, filter: false },
];
const loopLogos = [...logos, ...logos, ...logos, ...logos];

export default function LogosSection() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Swiper
          key={i18n.language}
          dir={isArabic ? "rtl" : "ltr"}
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={700}
          slidesPerView={2}
          slidesPerGroup={1}
          spaceBetween={25}
          breakpoints={{
            600: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {loopLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  height: { xs: 80, md: 100 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={logo.image}
                  alt={`Partner ${index + 1}`}
                  sx={{
                    maxWidth: { xs: 130, md: 160 },
                    maxHeight: { xs: 55, md: 65 },
                    objectFit: "contain",
                    ...(logo.filter && {
                      filter: "brightness(0) saturate(100%) invert(67%) sepia(35%) saturate(650%) hue-rotate(355deg) brightness(90%) contrast(90%)",
                    }),
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
