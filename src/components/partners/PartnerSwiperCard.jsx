import { Box, Typography } from "@mui/material";

export default function PartnerSwiperCard({ partner, isActive }) {
  return (
    <Box
      sx={{
        position: "relative",
        pt: 5,
        height: "100%",
        transform: isActive
          ? "scale(1)"
          : {
              xs: "scale(0.94)",
              md: "scale(0.88)",
            },
        opacity: isActive ? 1 : 0.5,
        transition: "all 0.5s ease",
        filter: isActive ? "none" : "drop-shadow(0 0 18px rgba(255,255,255,0.95))",
      }}
    >
      {/* Logo Circle */}
      <Box
        sx={{
          position: "absolute",
          top: -25,
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: 95, md: 125 },
          height: { xs: 95, md: 125 },
          borderRadius: "50%",
          backgroundColor: isActive ? "primary.main" : "#E8D3AA",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          boxShadow: isActive ? "0 8px 25px rgba(0,0,0,0.12)" : "0 0 25px rgba(255,255,255,0.95)",
          transition: "all 0.5s ease",
        }}
      >
        <Box
          component="img"
          src={partner.logo}
          alt={partner.title}
          sx={{
            width: "50%",
            height: "65%",
            objectFit: "contain",
            filter: "brightness(0) invert(1)",
          }}
        />
      </Box>

      {/* Gold Background */}
      <Box
        sx={{
          minHeight: {
            xs: 260,
            sm: 270,
            md: 280,
          },
          position: "absolute",
          inset: "35px -4px 20px",
          backgroundColor: "rgb(197, 152, 80)",
          borderRadius: 2,
          transform: "rotate(-2deg)",
          zIndex: 0,
        }}
      />

      {/* White Card */}
      <Box
        sx={{
          position: "relative",
          minHeight: {
            xs: 240,
            sm: 250,
            md: 260,
          },
          backgroundColor: "#fff",
          border: "2px solid",
          borderColor: isActive ? "primary.main" : "#E7D2AA",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          transition: "all 0.5s ease",
          zIndex: 1,
          px: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 17,
              sm: 18,
              md: 21,
            },
            fontWeight: 800,
            color: "#171717",
            mb: 2.5,
            lineHeight: 1.6,
          }}
        >
          {partner.title}
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: 13,
              sm: 13,
              md: 14,
            },
            lineHeight: 2,
            color: "text.secondary",
            maxWidth: 360,
          }}
        >
          {partner.description}
        </Typography>
      </Box>
    </Box>
  );
}
