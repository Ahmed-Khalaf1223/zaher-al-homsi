import { Box, Typography } from "@mui/material";

export default function SectionTitle({ eyebrow, title, description, align = "center" }) {
  return (
    <Box sx={{ textAlign: align, mb: 5 }}>
      {eyebrow && <Typography sx={{ fontWeight: 700, mb: 1, fontSize: { xs: 16, md: 24 } }}>{eyebrow}</Typography>}
      {title && (
        <Typography variant="h4" color="primary" sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: 700 }}>
          {title}
        </Typography>
      )}

      {description && (
        <Typography sx={{ maxWidth: 800, mx: align === "center" ? "auto" : 0, mt: 2, lineHeight: 2, color: "text.secondary" }}>
          {description}
        </Typography>
      )}
    </Box>
  );
}
