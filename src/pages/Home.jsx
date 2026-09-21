import HomeHero from "../components/home/HomeHero";
import AboutPreview from "../components/home/AboutPreview";
import Features from "../components/home/Features";
import WhyUs from "../components/home/WhyUs";
import PartnersPreview from "../components/home/PartnersPreview";

import ContactPreview from "../components/home/ContactPreview";
import LogosSection from "../components/home/LogosSection";

import AboutPreview1 from "/src/assets/images/AboutPreview1.png";
import AboutPreview2 from "/src/assets/images/AboutPreview2.png";
import AboutPreview3 from "/src/assets/icons/AboutPreview3.png";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <HomeHero />

      <AboutPreview
        image1={AboutPreview2}
        image2={AboutPreview1}
        icon={AboutPreview3}
        subtitle={t("home.about.subtitle")}
        title={t("home.about.title")}
        description={t("home.about.shortDescription")}
        experience={t("home.about.experience")}
        buttonText={t("home.about.more")}
      />
      <Features />

      <WhyUs />

      <PartnersPreview />
      <ContactPreview />

      <LogosSection />
    </>
  );
}
