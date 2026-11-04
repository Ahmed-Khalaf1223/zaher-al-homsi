import { Box, Typography } from "@mui/material";

function SectionHeader({
  title,
  subtitle,
  description,
  titleSize = { xs: 20, md: 28 },
  subtitleSize = { xs: 15, md: 20 },
  descriptionSize = { xs: 10, md: 15 },
  maxWidthTitle = 350,
  maxWidthSubtitle = 500,
  maxWidthDescription = 700,
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center", mb: { xs: 5, md: 7 } }}>
      <Typography sx={{ maxWidth: maxWidthTitle, fontSize: titleSize, fontWeight: 800, color: "#222" }}>{title}</Typography>
      <Typography sx={{ maxWidth: maxWidthSubtitle, fontSize: subtitleSize, fontWeight: 500, color: "primary.main", mb: 2 }}>{subtitle}</Typography>
      <Typography
        sx={{ maxWidth: maxWidthDescription, mx: "auto", fontSize: descriptionSize, fontWeight: 500, lineHeight: 1.9, color: "text.primary" }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default SectionHeader;
