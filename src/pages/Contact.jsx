import { Container } from "@mui/material";

import Hero from "../components/common/Hero";
import contact_cover from "../assets/images/contact_cover.jpg";
import { useTranslation } from "react-i18next";
import ContactPreview from "../components/home/ContactPreview";
export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <Hero title={t("nav.contact")} image={contact_cover} breadcrumb={[t("nav.contact")]} />

      <Container
        maxWidth="xl"
        sx={{
          py: 10,
          textAlign: "center",
        }}
      >
        <ContactPreview showImage={false} showLocation={true} />
      </Container>
    </>
  );
}
