import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SectionTitle from "../common/SectionTitle";

export default function AboutPreview({
  image1,
  image2,
  image3,
  image4,
  icon,
  subtitle,
  title,
  description,
  experience,
  buttonText,
  badgeTop,
  badgeLeft,
  badgeHeight,
  imageHeight,
}) {
  const { i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <Box
      component="section"
      dir={isArabic ? "rtl" : "ltr"}
      sx={{
        backgroundColor: "#F9F8F5",
        pt: 7,
        pb: 1,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 10 }} alignItems="center">
          {/* =====================================================
              Text
          ====================================================== */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              order: { xs: 1, md: 1 },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <SectionTitle eyebrow={subtitle} title={title} align={isArabic ? "right" : "left"} />
              <Box sx={{ fontWeight: 500, fontSize: { xs: 16, md: 20 }, lineHeight: 1.8, color: "text.secondary" }}>{description}</Box>
              {buttonText && (
                <Button
                  component={Link}
                  to="/about"
                  variant="contained"
                  sx={{
                    mt: 3,
                    minWidth: 135,
                    height: 42,
                    borderRadius: 1,
                    backgroundColor: "primary.main",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 13,
                    boxShadow: "0 5px 15px rgba(201,154,69,0.25)",
                    "&:hover": { backgroundColor: "#B68A35" },
                  }}
                >
                  {buttonText}
                </Button>
              )}
            </Box>
          </Grid>

          {/* =====================================================
              Images
          ====================================================== */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              order: { xs: 2, md: 2 },
            }}
          >
            <Box sx={{ position: "relative", width: "100%", maxWidth: 600, height: imageHeight || { xs: 350, sm: 400, md: 550 }, mx: "auto" }}>
              {image1 && (
                <Box
                  component="img"
                  src={image1}
                  alt=""
                  sx={{
                    position: "absolute",
                    top: "0%",
                    left: "2%",
                    width: {
                      xs: "40%",
                      sm: "43%",
                      md: "45%",
                    },
                    height: {
                      xs: 180,
                      sm: 240,
                      md: 300,
                    },
                    objectFit: "cover",
                    borderRadius: { xs: 2, md: 3 },
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                  }}
                />
              )}
              {image2 && (
                <Box
                  component="img"
                  src={image2}
                  alt=""
                  sx={{
                    position: "absolute",
                    top: "28%",
                    left: "53%",
                    width: {
                      xs: "40%",
                      sm: "43%",
                      md: "45%",
                    },
                    height: {
                      xs: 180,
                      sm: 240,
                      md: 300,
                    },
                    objectFit: "cover",
                    borderRadius: { xs: 2, md: 3 },
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                  }}
                />
              )}
              {image3 && (
                <Box sx={{ position: "absolute", top: "1.3%", left: "0%", width: "100%", height: "86.7%", zIndex: 2 }}>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 700 700"
                    preserveAspectRatio="none"
                    style={{
                      display: "block",
                    }}
                  >
                    <defs>
                      <clipPath id="imageClip3">
                        <path
                          d="
                            M 180 0
                            H 572
                            Q 600 0 600 28
                            V 545
                            Q 600 560 588 572
                            L 472 688
                            Q 460 700 442 700
                            H 28
                            Q 0 700 0 672
                            V 188
                            L 160 12
                            Q 168 0 180 0
                            Z
                          "
                        />
                      </clipPath>
                    </defs>
                    <image href={image3} width="700" height="700" preserveAspectRatio="xMidYMid slice" clipPath="url(#imageClip3)" />
                    <path
                      d="
                        M 180 0
                        H 572
                        Q 600 0 600 28
                        V 545
                        Q 600 560 588 572
                        L 472 688
                        Q 460 700 442 700
                        H 28
                        Q 0 700 0 672
                        V 188
                        L 160 12
                        Q 168 0 180 0
                        Z
                      "
                      fill="none"
                      stroke="#fff"
                      strokeWidth="14"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    <path
                      d="
                        M 180 0
                        H 572
                        Q 600 0 600 28
                        V 545
                        Q 600 560 588 572
                        L 472 688
                        Q 460 700 442 700
                        H 28
                        Q 0 700 0 672
                        V 188
                        L 160 12
                        Q 168 0 180 0
                        Z
                      "
                      fill="none"
                      stroke="rgb(197, 152, 80)"
                      strokeWidth="3"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </Box>
              )}
              {image4 && (
                <>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-4%",
                      left: "49%",
                      width: "52%",
                      aspectRatio: "1 / 0.91",
                      border: "3px solid rgb(197, 152, 80)",
                      borderRadius: 3,
                      backgroundColor: "#fff",
                      zIndex: 1,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-3%",
                      left: "50%",
                      width: "50%",
                      aspectRatio: "1 / 0.90",
                      borderRadius: 2,
                      overflow: "hidden",
                      zIndex: 3,
                    }}
                  >
                    <Box
                      component="img"
                      src={image4}
                      alt=""
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </Box>
                </>
              )}
              {/* ================= Experience Badge ================= */}
              <Box
                sx={{
                  position: "absolute",
                  top: badgeTop || { xs: "24%", sm: "24%", md: "24%" },
                  left: badgeLeft || { xs: "45%", sm: "45%", md: "55%" },
                  transform: "translateX(-50%)",
                  width: { xs: 95, sm: 105, md: 140 },
                  height: badgeHeight || { xs: 115, sm: 125, md: 160 },
                  backgroundColor: "primary.main",
                  color: "#fff",
                  borderRadius: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  zIndex: 4,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                }}
              >
                {/* ================= Icon ================= */}
                {icon && (
                  <Box
                    component="img"
                    src={icon}
                    alt=""
                    sx={{
                      width: { xs: 24, sm: 28, md: 38 },
                      height: { xs: 24, sm: 28, md: 38 },
                      mb: { xs: 0.5, sm: 0.7, md: 1 },
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                )}
                {/* ================= Years ================= */}
                <Typography
                  sx={{
                    fontSize: { xs: 18, sm: 22, md: 32 },
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  +8
                </Typography>
                {/* ================= Experience ================= */}
                <Typography
                  sx={{
                    fontSize: { xs: 8, sm: 10, md: 20 },
                    fontWeight: 800,
                    mt: { xs: 0.5, sm: 0.7, md: 1 },
                    px: 0.5,
                  }}
                >
                  {experience}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
