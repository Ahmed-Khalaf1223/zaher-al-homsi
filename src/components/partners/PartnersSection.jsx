import { Box, Container, Grid } from "@mui/material";

import { useTranslation } from "react-i18next";
import SectionHeader from "../common/SectionHeader";
import PartnerCard from "./PartnerCard";

export default function PartnersSection() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  const partnersData = t("home.partners.items", {
    returnObjects: true,
  });

  const partners = Object.entries(partnersData).map(([id, partner]) => ({
    id,
    ...partner,
  }));

  return (
    <Box
      component="section"
      dir={isArabic ? "rtl" : "ltr"}
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#F9F8F5",
        py: { xs: 7, md: 9 },
      }}
    >
      <Container maxWidth="lg">
        {/* =========================
            Section Header
        ========================= */}
        <SectionHeader
          title={t("home.partners.title")}
          subtitle={t("home.partners.subtitle")}
          description={t("home.partners.description")}
          titleSize={{ xs: 20, md: 38 }}
          subtitleSize={{ xs: 15, md: 24 }}
          descriptionSize={{ xs: 14, md: 18 }}
          maxWidthTitle={600}
          maxWidthSubtitle={500}
          maxWidthDescription={850}
        />
        {/* =========================
            Cards
        ========================= */}
        <Grid container spacing={3}>
          {partners.map((partner) => (
            <Grid key={partner.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <PartnerCard partner={partner} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
