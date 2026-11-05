import { Box, Container, Grid } from "@mui/material";

import { useTranslation } from "react-i18next";
import SectionHeader from "../common/SectionHeader";
import PartnerCard from "./PartnerCard";

import { partnerLogos } from "../../data/partners";

export default function PartnersSection() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  const partnersData = t("home.partners.items", {
    returnObjects: true,
    defaultValue: {},
  });

  const safePartnersData = partnersData && typeof partnersData === "object" && !Array.isArray(partnersData) ? partnersData : {};

  const partners = Object.entries(safePartnersData).map(([id, partner]) => ({
    id,
    ...partner,
    logo: partnerLogos[id],
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
