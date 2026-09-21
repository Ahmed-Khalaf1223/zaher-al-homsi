import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import Hero from "../components/common/Hero";
import Features from "../components/home/Features";
import WhyUs from "../components/home/WhyUs";
import LogosSection from "../components/home/LogosSection";

import About_cover from "/src/assets/images/about_cover.jpg";
import Testimonials from "../components/home/Testimonials";
import AboutPreview from "../components/home/AboutPreview";

import AboutPreview5 from "/src/assets/images/AboutPreview5.jpg";
import AboutPreview6 from "/src/assets/images/AboutPreview6.png";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Hero title={t("nav.about")} image={About_cover} breadcrumb={[t("nav.about")]} />
      <Box>
        <AboutPreview
          image3={AboutPreview6}
          image4={AboutPreview5}
          subtitle={t("home.about.subtitle")}
          title={t("home.about.title")}
          description={
            <>
              <Typography sx={{ pb: 4 }}>{t("home.about.shortDescription")}</Typography>
              <Typography sx={{ pb: 4 }} paragraph>
                {t("home.about.description")}
              </Typography>
            </>
          }
          experience={t("home.about.experience")}
          badgeTop={{ xs: "70%", sm: "76%", md: "75%" }}
          badgeLeft={{ xs: 76, sm: 85, md: 90 }}
          badgeHeight={{ xs: 110, sm: 115, md: 120 }}
          imageHeight={{ xs: 380, sm: 480, md: 550 }}
        />
        <Features />
        <WhyUs />
        <Testimonials />
        <LogosSection />
      </Box>
    </>
  );
}
