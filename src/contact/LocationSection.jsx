import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import locationImage from "../assets/icons/location_img.png";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32265.717112377468!2d30.574403717860058!3d30.283625796870094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458eab7dd6a03cb%3A0x4a281989d5565f1e!2sBelco%20Farms!5e0!3m2!1sar!2sru!4v1789933593147!5m2!1sar!2sru";

export default function LocationSection() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <Box sx={{ mt: { xs: 5, md: 7 } }}>
      <Grid container spacing={2} sx={{ direction: "ltr" }}>
        {/* Information Box */}
        <Grid size={{ xs: 12, md: 4 }} sx={{ order: { xs: 1, md: isArabic ? 1 : 2 } }}>
          <Box
            sx={{
              height: "100%",
              minHeight: { xs: 280, md: 300 },
              backgroundColor: "#EAE2D3",
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: { xs: 3, md: 4 },
              py: 4,
            }}
          >
            <Box
              component="img"
              src={locationImage}
              alt={t("home.location.imageAlt")}
              sx={{ width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 }, objectFit: "contain", mb: 2 }}
            />
            <Typography sx={{ fontSize: { xs: 12, md: 18 }, fontWeight: 700, color: "#222", mb: 2 }}>{t("home.location.title")}</Typography>
            <Typography sx={{ fontSize: { xs: 10, md: 14 }, color: "text.secondary", lineHeight: 1.9, maxWidth: 420 }}>
              {t("home.location.description")}
            </Typography>
          </Box>
        </Grid>

        {/* Google Map */}
        <Grid size={{ xs: 12, md: 8 }} sx={{ order: { xs: 2, md: isArabic ? 2 : 1 } }}>
          <Box sx={{ height: 300, borderRadius: 2, overflow: "hidden", border: "1px solid #E7D6B7" }}>
            <iframe
              title={t("home.location.mapTitle")}
              src={MAP_SRC}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
