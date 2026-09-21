import Hero from "../components/common/Hero";
import PartnersSection from "../components/partners/PartnersSection";
import Partners_cover from "../assets/images/Partners_cover.jpg";
import { useTranslation } from "react-i18next";

export default function Partners() {
  const { t } = useTranslation();
  return (
    <>
      <Hero title={t("nav.partners")} image={Partners_cover} breadcrumb={[t("nav.partners")]} />

      <PartnersSection />
    </>
  );
}
