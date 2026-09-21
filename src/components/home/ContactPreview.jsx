import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ContactPreview1 from "/src/assets/images/ContactPreview.png";
import locationImage from "../../assets/icons/location_img.png";
export default function ContactPreview({ showImage = true, showLocation = false }) {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <Box
      component="section"
      dir={isArabic ? "rtl" : "ltr"}
      sx={{
        pb: {
          xs: 6,
          md: 8,
        },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: "#EAE2D3",
            borderRadius: { xs: 1, md: 2 },
            overflow: "hidden",
          }}
        >
          <Grid container>
            {/* =========================
                Image
            ========================= */}
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
            {/* =========================
                Form
            ========================= */}
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
                {/* Header */}
                <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }}>
                  <Typography sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, color: "#171717", mb: 1.5 }}>{t("home.contact.title")}</Typography>

                  <Typography sx={{ fontSize: { xs: 17, md: 20 }, fontWeight: 700, maxWidth: 500, color: "primary.main", mb: 2 }}>
                    {t("home.contact.subtitle")}
                  </Typography>

                  <Typography sx={{ fontSize: { xs: 13, md: 15 }, color: "text.secondary", maxWidth: 600, lineHeight: 1.9 }}>
                    {t("home.contact.description")}
                  </Typography>
                </Box>

                {/* Form */}
                <Grid container spacing={2}>
                  {/* Full Name */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      type="text"
                      fullWidth
                      size="small"
                      placeholder={t("home.contact.form.name")}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#fff",
                          borderRadius: 1,
                          minHeight: 52,
                        },
                      }}
                    />
                  </Grid>

                  {/* Phone */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      type="tel"
                      fullWidth
                      size="small"
                      placeholder={t("home.contact.form.phone")}
                      inputProps={{
                        dir: "ltr",
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#fff",
                          borderRadius: 1,
                          minHeight: 52,
                        },
                        "& input": {
                          textAlign: isArabic ? "right" : "left",
                        },
                      }}
                    />
                  </Grid>

                  {/* Email */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      type="email"
                      fullWidth
                      size="small"
                      placeholder={t("home.contact.form.email")}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#fff",
                          borderRadius: 1,
                          minHeight: 52,
                        },
                      }}
                    />
                  </Grid>

                  {/* Inquiry Type */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      type="text"
                      fullWidth
                      size="small"
                      placeholder={t("home.contact.form.type")}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#fff",
                          borderRadius: 1,
                          minHeight: 52,
                        },
                      }}
                    />
                  </Grid>

                  {/* Notes */}
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      placeholder={t("home.contact.form.notes")}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#fff",
                          borderRadius: 1,
                        },
                      }}
                    />
                  </Grid>

                  {/* Button */}
                  <Grid size={12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 1,
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          minWidth: { xs: 130, md: 160 },
                          height: { xs: 45, md: 50 },
                          borderRadius: 1,
                          fontWeight: 700,
                          boxShadow: "none",

                          "&:hover": {
                            boxShadow: "none",
                            backgroundColor: "primary.dark",
                          },
                        }}
                      >
                        {t("home.contact.form.submit")}
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* =========================
              Location
            ========================== */}
        {showLocation && (
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
                  {/* Location Image */}
                  <Box
                    component="img"
                    src={locationImage}
                    alt={t("home.location.imageAlt")}
                    sx={{ width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 }, objectFit: "contain", mb: 2 }}
                  />
                  <Typography sx={{ fontSize: { xs: 22, md: 26 }, fontWeight: 800, color: "#222", mb: 2 }}>{t("home.location.title")}</Typography>
                  <Typography sx={{ fontSize: { xs: 14, md: 16 }, color: "text.secondary", lineHeight: 1.9, maxWidth: 420 }}>
                    {t("home.location.description")}
                  </Typography>
                </Box>
              </Grid>

              {/* Google Map */}
              <Grid size={{ xs: 12, md: 8 }} sx={{ order: { xs: 2, md: isArabic ? 2 : 1 } }}>
                <Box
                  sx={{
                    height: { xs: 300, md: 300 },
                    borderRadius: 2,
                    overflow: "hidden",
                    border: "1px solid #E7D6B7",
                  }}
                >
                  <iframe
                    title={t("home.location.mapTitle")}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32265.717112377468!2d30.574403717860058!3d30.283625796870094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458eab7dd6a03cb%3A0x4a281989d5565f1e!2sBelco%20Farms!5e0!3m2!1sar!2sru!4v1789933593147!5m2!1sar!2sru"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      display: "block",
                    }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
}
