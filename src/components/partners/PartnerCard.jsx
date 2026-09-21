import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function PartnerCard({ partner }) {
  return (
    <Box
      component={Link}
      to={`/partners/${partner.id}`}
      sx={{
        height: "100%",
        minHeight: 255,
        backgroundColor: "#fff",
        border: "1px solid #E5DED1",
        borderBottom: "4px solid #C99A4A",
        borderRadius: 1.5,
        px: 3,
        py: 3,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": { transform: "translateY(-6px)" },
      }}
    >
      {/* Logo */}
      <Box sx={{ width: 110, height: 70, display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
        <Box component="img" src={partner.logo} alt={partner.title} sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
      </Box>

      {/* Title */}
      <Typography sx={{ fontSize: { xs: 16, md: 17 }, fontWeight: 700, color: "#222", mb: 1.5 }}>{partner.title}</Typography>

      {/* Description */}
      <Typography
        sx={{
          fontSize: { xs: 13, md: 14 },
          lineHeight: 2,
          color: "text.secondary",
        }}
      >
        {partner.description}
      </Typography>
    </Box>
  );
}
