import { Box, Container } from "@mui/material";
import { useTranslation } from "react-i18next";

import PartnerSwiper from "../partners/PartnerSwiper.jsx";
import SectionHeader from "../common/SectionHeader.jsx";
import CustomButton from "../common/CustomButton";

export default function PartnersPreview() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <Box
      component="section"
      dir={isArabic ? "rtl" : "ltr"}
      sx={{
        backgroundColor: "#F8F6F1",
        overflow: "hidden",
        py: 3,
      }}
    >
      <Container maxWidth="xl">
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

        {/* Partners Swiper */}
        <PartnerSwiper />
        {/* More Button */}
        {/* <Box sx={{ textAlign: "center", mt: 3 }}>
          <Box
            component={Link}
            to="/partners"
            sx={{
              display: "inline-block",
              backgroundColor: "primary.main",
              color: "#fff",
              px: 5,
              py: 1.5,
              borderRadius: 1,
              fontWeight: 700,
              textDecoration: "none",
              transition: "0.3s",
              "&:hover": { backgroundColor: "primary.dark" },
            }}
          >
            {t("home.partners.more")}
          </Box>
        </Box> */}

        {/* More Button */}
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <CustomButton to="/partners" sx={{ px: 3, py: 1.5, textDecoration: "none" }}>
            {t("home.partners.more")}
          </CustomButton>
        </Box>
      </Container>
    </Box>
  );
}
