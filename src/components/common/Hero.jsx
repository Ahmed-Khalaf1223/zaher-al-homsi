import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Hero({ title, image, breadcrumb = [] }) {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 260, sm: 320, md: 390 },
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(0,0,0,0.15),
            rgba(0,0,0,0.65)
          ),
          url(${image})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: isArabic ? "right" : "left",
            mr: { xs: 0, md: 3 },
          }}
        >
          <Typography variant="h1" sx={{ color: "#fff", fontSize: { xs: 32, md: 48 }, fontWeight: 800, mb: 2 }}>
            {title}
          </Typography>
          <Box
            dir={isArabic ? "rtl" : "ltr"}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: "10px",
              backgroundColor: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            {/* Home */}
            <Typography
              component={Link}
              to="/"
              sx={{ color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", "&:hover": { color: "primary.main" } }}
            >
              {t("nav.home")}
            </Typography>
            {breadcrumb.map((item, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ color: "primary.main" }}>&gt;</Typography>
                <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>{item}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
