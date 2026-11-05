import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import ContactPreview1 from "/src/assets/images/ContactPreview.png";
import ContactForm from "../../contact/ContactForm";
import LocationSection from "../../contact/LocationSection";

export default function ContactPreview({ showImage = true, showLocation = false }) {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <Box component="section" dir={isArabic ? "rtl" : "ltr"} sx={{ pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="xl">
        <Box sx={{ backgroundColor: "#EAE2D3", borderRadius: { xs: 1, md: 2 }, overflow: "hidden" }}>
          <Grid container>
            {/* Image */}
            {showImage && (
              <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 1, md: isArabic ? 2 : 1 } }}>
                <Box
                  sx={{
                    height: { xs: 300, sm: 400, md: "100%" },
                    minHeight: { md: 550 },
                    backgroundImage: `url(${ContactPreview1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                  }}
                />
              </Grid>
            )}

            {/* Header + Form */}
            <Grid size={{ xs: 12, md: showImage ? 7 : 12 }} sx={{ order: { xs: 2, md: isArabic ? 1 : 2 } }}>
              <Box
                sx={{
                  height: "100%",
                  px: { xs: 3, sm: 5, md: showImage ? 6 : 12 },
                  py: { xs: 4, md: 6 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }}>
                  <Typography sx={{ fontSize: 24, fontWeight: 700, color: "#171717", mb: 1.5 }}>{t("home.contact.title")}</Typography>

                  <Typography sx={{ fontSize: { xs: 17, md: 20 }, fontWeight: 700, maxWidth: 500, color: "primary.main", mb: 2 }}>
                    {t("home.contact.subtitle")}
                  </Typography>

                  <Typography sx={{ fontSize: { xs: 13, md: 15 }, color: "text.secondary", maxWidth: 600, lineHeight: 1.9 }}>
                    {t("home.contact.description")}
                  </Typography>
                </Box>

                <ContactForm />
              </Box>
            </Grid>
          </Grid>
        </Box>
        {showLocation && <LocationSection />}
      </Container>
    </Box>
  );
}
